import AppointmentData from "../types/AppointmentsData";

const ishtiaqAhmed:AppointmentData = {
    id:1,
    firstName:"Ishtiaq",
    lastName:"Ahmed",
    time: "4:45 PM",
    completed:true,
}
const farihaIslam:AppointmentData = {
    id:2,
    firstName:"Fariha",
    lastName:"Islam",
    time: "2:20 PM",
    completed:false,
}
const wasiChowDhury:AppointmentData = {
    id:3,
    firstName:"Wasi",
    lastName:"ChowDhury",
    time: "1:50 PM",
    completed:false,
}

const DummyAppoinmentData = [ishtiaqAhmed,farihaIslam,wasiChowDhury];

export default DummyAppoinmentData;