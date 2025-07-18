import { Box, Checkbox, FormControlLabel, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function BillingAddress() {






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

  return (
    <Box


      component="form"

      sx={{
        bgcolor: "background.paper",
        padding:"20px",
        borderRadius: "10px",

        
      }}
      
    >
     

      
        <Typography
         component="p"
          variant="p"
          >
            Shipping Address
          </Typography>


          <FormControlLabel 
          control={<Checkbox color='error' />} 
          label="Same as shipping address" />



        <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        >


          <Box>



             <TextField
                      label="Full Name"
                      
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                     
                    >
                      
                      
              </TextField>
             <TextField
                      label="Email Address"
                      
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                     
                    >
                      
                      
              </TextField>
             <TextField
                      label="Address"
                      
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                     
                    >
                      
                      
              </TextField>
             
              <TextField
          id="outlined-select-currency"
          select
          label="Country"
          defaultValue="Egypt"
          color="error"
          sx={{
            width: "100%",
            my: "15px",
          }}
        >
          {currencies.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>



          </Box>


          <Box>



             <TextField
                      label="Phone Number"
                      
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                     
                    >
                      
                      
              </TextField>
             <TextField
                      label="Company Name"
                      
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                     
                    >
                      
                      
              </TextField>
             <TextField
                      label="Address 2"
                      
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                     
                    >
                      
                      
              </TextField>
             <TextField
                      label="Zip Code"
                      
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                     
                    >
                      
                      
              </TextField>



          </Box>

        </Stack>


        </Box>
  )
}

export default BillingAddress