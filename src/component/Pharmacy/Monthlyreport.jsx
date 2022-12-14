import React from 'react'
import MaterialTable from 'material-table'
import { ThemeProvider,createTheme, Stack, TextField  } from '@mui/material';
const Monthlyreport = () => {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Date', field: 'name' },
    { title: 'Products Name', field: 'name' },
    { title: 'Products Unit', field: 'name' },
    { title: 'Qauntity', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Price', field: 'birthYear', type: 'numeric' },
    {title: 'total',field: 'birthCity',lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },},
  ]);

  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);
  const defaultMaterialTheme = createTheme();
  return (
   
    <div className='mx-6'>
       <Stack direction="row" spacing={2} margin="23px" justifyContent="center">
     <TextField type="Date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  />
     <TextField type="Date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  />

      
      </Stack>
  <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative my-2">Submit </button></center> 
      <ThemeProvider theme={defaultMaterialTheme}>
       <MaterialTable
      title="Bulk Edit Preview"
      columns={columns}
      data={data}
      editable={{
        onBulkUpdate: changes =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          }),     
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          }),     
      }}
    />
    </ThemeProvider>
  <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative my-2">Print </button></center> 

    </div>
  )
}

export default Monthlyreport