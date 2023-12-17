import RowData from "../types/TableData"
const rafid:RowData = {
    id:1,
    firstName: "Rafid",
    lastName: "Chowdhury",
    diseases:"Lung Cancer,tetanus",
    payments: true,
}

const emdadul:RowData = {
    id:2,
    firstName: "Emdadul",
    lastName:"Haque",
    diseases: "Leg Pain,Arthritis",
    payments: false,
}

const Mahfuzul:RowData = {
    id:3,
    firstName: "Mahfuzul",
    lastName: "Islam",
    diseases: "Broken jawline,Heart Broken",
    payments: false,
}
const DummyTableData = [rafid,emdadul,Mahfuzul];
export default DummyTableData;