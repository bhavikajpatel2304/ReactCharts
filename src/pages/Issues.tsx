import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import Drawer from "../components/Drawer";
import DataTable from '../components/Table';
import "../styles/Issues.css"
import { useNavigate } from "react-router-dom";



function Issues() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path, { replace: true });
  }
  return (
    <div className="page-main">
    <Drawer />
    <div className="page-body">
      <div>
      <h1 className="issue-heading">All Issues</h1>
      <button className="bug-btn" onClick={routeChange}>Create Bug</button>
      </div>
    <DataTable />
    </div>
  </div>
  )
}

export default Issues