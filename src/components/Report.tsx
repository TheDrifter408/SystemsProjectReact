import ReportData from "../types/ReportData";
import reportData from "../data/DummyReportData";
import { ReactNode } from "react";

function ListItem({id,fullName,completed}:ReportData):ReactNode {
    return (
        <li>
            <span>{id}.</span>
            <span>{fullName}</span>
            <div style={{width:50,height:20, backgroundColor: "white",borderRadius:"0.5rem",border:"1px solid black"}}>
            <div style={{width:`${completed}%`,borderRadius:"0.5rem",height:"100%",backgroundColor:'green'}} />
            </div>
        </li>
    )
}
function Report() {
    return (
        <ul>
            {
                reportData.map((person:ReportData) => 
                <ListItem key={person.id} id={person.id} fullName={person.fullName} completed={person.completed} />
                )
            }
        </ul>
    )
}
export default Report;