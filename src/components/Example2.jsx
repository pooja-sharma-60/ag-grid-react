import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";

const Example2 = () => {
    const [rowData , setRowData] = useState([])
    const [colDefs] = useState([
        { field: "mission" , flex: 2},
        { field: "company" },
        { field: "location" , flex: 2 },
        { field: "date" },
        { field: "price" },
        { field: "successful" },
        { field: "rocket" }
      ]);

    const fetchSpaceData = async () => {
        const response = await fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
        const data = await response.json();
        setRowData(data);
    }
    useEffect(() => {
        try {
            fetchSpaceData()
        } catch (error) {
            console.log(error)
        }
    },[])

    const defaultColDef = {
        flex : 1,
        filter :true
    }

    const rowSelection = {
        mode: 'multiRow',
        headerCheckbox: false
    }

    const pagination = true;
    const paginationPageSize = 20;
    const paginationPageSizeSelector = [20,50,100]

  return (
    <div className="ag-theme-quartz" style={{height: 700}}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} rowSelection={rowSelection} pagination={pagination} paginationPageSize={paginationPageSize} paginationPageSizeSelector={paginationPageSizeSelector}/>
    </div>
  )
}

export default Example2