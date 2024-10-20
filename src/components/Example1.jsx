import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { useState } from "react";


const Example1 = () => {

    // Row Data: The data to be displayed.
    const [rowData ] = useState([
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
        { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
        { make: 'Fiat', model: '500', price: 15774, electric: false },
        { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
    ])

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs] = useState([
        { headerName : 'Company', field: 'make' , valueGetter: p => p.data.make + ' ' + p.data.model }, // if header name is not present , the title is taken from the field
        { field: 'model'  },
        { field: 'price', valueFormatter: p => '£' + p.value.toLocaleString()  },
        { field: 'electric' },
    ])

    const defaultColDef = {
        flex : 1
    }

  return (
    <div className="ag-theme-quartz" style={{height: 500}}>
       <AgGridReact 
       rowData={rowData} 
       columnDefs={colDefs}
       defaultColDef={defaultColDef}
       />
    </div>
  )
}

export default Example1