import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import Drawer from "../components/Drawer";
import DataTable from '../components/Table';


function Issues() {
  return (
    <div className="page-main">
    <Drawer />
    <div className="page-body">
      <h1 className="issue-heading">All Issues</h1>
    <DataTable />
    </div>
  </div>
  )
}

export default Issues