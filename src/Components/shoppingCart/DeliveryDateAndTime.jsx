import { Avatar, Box, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react';


function DeliveryDateAndTime({form , setform}) {

   
  // Data of selct input in the form

  const currencies = [
    {
      value: "Egypt",
    },
    {
      value: "Emarat",
    },
    {
      value: "Sodeian",
    },
    {
      value: "canada",
    },
  ];


  // Handel input of the form
  const handelDelivaryDateInput = (event) => {
    setform({...form , deliveryDate : event.target.value})
   
  };

  const handelDelivaryTimeInput = (event)=>{
    
    setform({...form , delivaryTime : event.target.value})
  }

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: "20px",
        borderRadius: "10px",
      }}
    >

      <Stack
      direction="row"
      alignItems="center"
      gap={2}
      sx={{
        mb:"15px",
      }}
      >
      <Avatar
        sx={{ bgcolor: "error.main" }}
        alt="Remy Sharp"
      >
        1
      </Avatar>
        <Typography
        component="h6"
        variant="h6"
        >
        Delivery Date and Time
        </Typography>
      </Stack>

      <Stack
      direction={{xs:"column", md:"row"}}
      alignItems="center"
      gap={2}
      >
      <TextField
      value={form.deliveryDate || ""}
      onChange={handelDelivaryDateInput}
          id="outlined-select-currency"
          select
          label="Delivery Date"
          color="error"
          sx={{
            width: "100%",
          }}
        >
          {currencies.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      <TextField
      value={form.delivaryTime || ""}
      onChange={handelDelivaryTimeInput}
          id="outlined-select-currency"
          select
          label="Delivery Time"
          color="error"
          sx={{
            width: "100%",
          }}
        >
          {currencies.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Stack>


      

    </Box>
  )
}

export default DeliveryDateAndTime