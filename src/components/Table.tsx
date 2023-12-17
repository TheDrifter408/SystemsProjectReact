import RowData from "../types/TableData";
import DummyTableData from "../data/DummyTableData";
interface RowProps {
    person:RowData;
}

function Row({person}:RowProps) {
    return (
        <tr>
            <td>{person.id}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.diseases}</td>
            <td className={person.payments ? "green" : "red"} >{person.payments ? "Paid" : "Not Paid"}</td>
        </tr>
    )
}

function Table() {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Diseases</th>
                    <th>Payment</th>
                </tr>
            </thead>
            <tbody>
               {
                DummyTableData.map((person) => 
                <Row key={person.id} person={person} />)
               }
            </tbody>
        </table>
        </>
    )
}

export default Table;