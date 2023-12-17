import AppointmentData from "../types/AppointmentsData";
import formData from "../types/formData";
import DummyAppoinmentData from "../data/DummyAppointmentData";
import { useState, ChangeEvent, FormEvent } from "react";

interface listProps {
    appointmentData: AppointmentData;
    setChecked: (id:number) => void;
}

interface inputProps {
    inputData: (patient:AppointmentData) => void
}

let initialData:formData = {
    firstName:'',
    lastName:'',
    hour:'',
    minutes:''
}

function AppointmentForm({inputData}:inputProps) {
    const [userData,setUserData] = useState(initialData);
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]:value
        }))
    }
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        const newPatient:AppointmentData = {
            id: DummyAppoinmentData[DummyAppoinmentData.length - 1] ? DummyAppoinmentData[DummyAppoinmentData.length - 1].id + 1 : 1,
            firstName:userData.firstName,
            lastName:userData.lastName,
            time: `${userData.hour}:${userData.minutes} PM`,
            completed:false,
        }
        inputData(newPatient);
    }
    return (
        <div style={{margin:"1rem 1rem"}}>
            <form className="grid gap-1" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="firstName">First Name:</label>
          <input 
            name="firstName" 
            value={userData.firstName} 
            onChange={handleChange}
            type="text" 
            id="firstName" />
          <label htmlFor="lastName">Last Name:</label>
          <input 
            name="lastName"
            value={userData.lastName}
            onChange={handleChange} 
            type="text" id="lastName" />
          <div className="flex gap-1">
            <label htmlFor="hour">Hour:</label>
            <input 
            name="hour" 
            value={userData.hour}
            onChange={handleChange}
            type="number" min="1" max="12" id="hour" />
            <label htmlFor="minutes">Minutes:</label>
            <input 
            name="minutes" 
            value={userData.minutes}
            onChange={handleChange}
            type="number" min="00" max="59" id="minutes"/>
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
        </div>
    )
}

function ListItem({appointmentData,setChecked}:listProps){
    return (
        <tr>
            <td>{appointmentData.id}</td>
            <td>{appointmentData.firstName}</td>
            <td>{appointmentData.lastName}</td>
            <td>{appointmentData.time}</td>
            <td>
                <input style={{backgroundColor: "hsl(205, 52%, 81%)"}} type="checkbox" name="" id={`${appointmentData.id}`} checked={appointmentData.completed} onChange={ () => setChecked(appointmentData.id)}/>
            </td>
            
        </tr>
    )
}

function Appointments() {
    const [dummyData,setDummyData] = useState(DummyAppoinmentData);
    
    function inputData(newData:AppointmentData) {
        const newDummyData = newData;
        setDummyData((prevData) => [...prevData,newDummyData]); 
    }
    
    const setChecked = (id:number) => {
       const newData = dummyData.filter((person:AppointmentData) => {
        if(person.id === id){
            person.completed = !person.completed;
        }
        return person
       })
       setDummyData(newData);  
    }
    return (
        <>
        <AppointmentForm inputData={inputData} />
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Time</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
            {
                dummyData.map((person) => 
                    <ListItem key={person.id} appointmentData={person} setChecked={setChecked} />
                )
            }
            </tbody>
        </table>
        </>
        
    )
}

export default Appointments;