import React from 'react'
import { Button, Container, Stack, TextField } from '@mui/material'


import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },

  { field: 'item code', headerName: 'Item Code', width: 130 },
  { field: 'productsname', headerName: 'Products name', width: 130 },
  {field: 'unit',headerName: 'unit',type: 'number',width: 90,},
  {field: 'Quantity',headerName: 'Quantity',type: 'number',width: 90,},
  { field: 'productstype', headerName: 'Price', width: 130 },
  {field: 'total',headerName: 'total',type: 'number',width: 90,},

];

const rows = [
  { id: 1, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
  { id: 2, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },
  { id: 3, productstype: 'injection', productsname: 'Medicine3', unit: 3.5 },
  { id: 4, productstype: 'injection', productsname: 'Medicine4', unit: 2.5 },
  { id: 5, productstype: 'Durg', productsname: 'Medicine5', unit: 5.5 },
  { id: 6, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
  { id: 7, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },
  { id: 8, productstype: 'injection', productsname: 'Medicine3', unit: 3.5 },
  { id: 9, productstype: 'injection', productsname: 'Medicine4', unit: 2.5 },
  { id: 10, productstype: 'Durg', productsname: 'Medicine5', unit: 5.5 },
  { id: 11, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
  { id: 12, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },
  { id: 13, productstype: 'injection', productsname: 'Medicine3', unit: 3.5 },
  { id: 14, productstype: 'injection', productsname: 'Medicine4', unit: 2.5 },
  { id: 15, productstype: 'Durg', productsname: 'Medicine5', unit: 5.5 },

];
const Stockinventoty = () => {
  return (
    <div className=''>
          <h1 className='text-center my-8 font-bold text-2xl'>Stock inventroy</h1>
        <Container>
        <Stack direction="row" spacing={2} justifyContent="center">
    {/* <TextField type="number" sx={{width:200}} id="outlined-basic" label="Doc Number" variant="outlined"  /> */}
    <TextField type="date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  />
    <TextField type="date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  />

    </Stack>
 
    <div className='mt-3 ali'>

  <center>  <Button variant="contained" alignitems="center">Submit</Button></center> 
    </div>

        </Container>

       
 <div style={{ height: 800, width: '100%', marginTop:'10px', padding:'5px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
      />
    </div>
    <div className='flex justify-center'> 
      <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative mx-2 ">Print </button></center> 
      <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-red-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative mx-2 ">Save </button></center> 
      <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative ">Grand Total= </button></center> 
      </div>
    </div>
  )
}

export default Stockinventoty