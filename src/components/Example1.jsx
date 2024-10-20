import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";


const Example1 = () => {
  // Row Data: The data to be displayed.
  const [rowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  // add buttons to cells with Cell Component
  const CustomButtonComponent = () => {
    return <button onClick={() => alert("clicked")}>Push me</button>;
  };
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState([
    {
      headerName: "Company",
      field: "make",
      valueGetter: (p) => p.data.make + " " + p.data.model,
      flex: 2,
    }, // if header name is not present , the title is taken from the field
    {
      field: "model",
      filter: true,
      floatingFilter: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Juke", "500", "EQA", "Model Y"],
      },
    },
    {
      field: "price",
      valueFormatter: (p) => "£" + p.value.toLocaleString(),
      filter: true,
    },
    { field: "electric", editable: true , cellClassRules: {
        'rag-green' : p => p.value === true
    }},
    { field: "button", cellRenderer: CustomButtonComponent },
  ]);

  const defaultColDef = {
    flex: 1,
    sortable: false
    // filter: true,
    // floatingFilter: true
  };

  // row selection
  const rowSelection = {
    // mode : 'singleRow'
    mode: "multiRow",
    headerCheckbox: false,
  };

  const pagination = true
  const paginationPageSize = 2;
  const paginationPageSizeSelector = [2 , 4,6];

  const rowClassRules = {
    'rag-red' : p => p.data.model === '500'
  }

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        rowSelection={rowSelection}
        pagination = {pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        rowClassRules={rowClassRules}
      />
    </div>
  );
};

export default Example1;
