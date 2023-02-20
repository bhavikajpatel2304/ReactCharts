import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "../styles/Table.css";
import { CSVLink, CSVDownload } from "react-csv";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const columns: GridColDef[] = [
  // { field: '_id', headerName: 'ID' , width:150},
  { field: 'title', headerName: 'Title' , width: 200, editable: true},
  { field: 'description', headerName: 'Description', width: 300, editable: true },
  {
    field: 'status',
    headerName: 'Status',
    // type: 'number',
    width: 100,
  },
  { field: 'assigned_to', headerName: 'Developer' , width:150},
  {
    field: 'priority',
    headerName: 'Priority',
    description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 160,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'deadline', headerName: 'Deadline' , width:150},
];

export default function DataTable() {
  const [bugs, setBugs] = useState([]);
useEffect(() => {
  fetch('http://localhost:8089/abhishek/bug')
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        setBugs(data);
     })
     .catch((err) => {
        console.log(err.message);
     });
}, []);

  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
      
        rows={bugs}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        className="design"
      />
      <CSVLink className="btn btn-primary csv-button" target="_blank" filename={"Raw Data.csv"} data={bugs}>Download me</CSVLink>
    </div>
  );
}
