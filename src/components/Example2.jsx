/* eslint-disable react/prop-types */
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";

const CompanyLogoRenderer = ({ value }) => (
    <span style={{ display: "flex", height: "100%", width: "100%", alignItems: "center" }}>{value && <img alt={`${value} Flag`} src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`} style={{display: "block", width: "25px", height: "auto", maxHeight: "50%", marginRight: "12px", filter: "brightness(1.1)"}} />}<p style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{value}</p></span>
   );


const Example2 = () => {
    const [rowData , setRowData] = useState([])
    const [colDefs] = useState([
        { field: "mission" , flex: 2},
        { field: "company" , cellRenderer: CompanyLogoRenderer},
        { field: "location" , flex: 2 },
        { field: "date" },
        { field: "price" , valueFormatter: params => '£' + params.value.toLocaleString() },
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
        filter :true,
        editable: true
    }

    const rowSelection = {
        mode: 'multiRow',
        headerCheckbox: false
    }

   
    const pagination = true;
    const paginationPageSize = 100;
    const paginationPageSizeSelector = [20,50,100]

  return (
    <div className="ag-theme-quartz" style={{height: 700}}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} rowSelection={rowSelection} pagination={pagination} paginationPageSize={paginationPageSize} paginationPageSizeSelector={paginationPageSizeSelector} onCellValueChanged={event => console.log(`New Cell Value: ${event.value}`)}/>
    </div>
  )
}

export default Example2