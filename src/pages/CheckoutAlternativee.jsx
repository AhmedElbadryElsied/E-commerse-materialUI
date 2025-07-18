import { Box, Container, Stack, useTheme } from '@mui/material'
import React, { useState } from 'react'
import OrderAccounts from '../Components/shoppingCart/OrderAccounts'
import DeliveryDateAndTime from '../Components/shoppingCart/DeliveryDateAndTime'
import DeliveryAddress from '../Components/shoppingCart/DeliveryAddress'
import PaymentDetails from '../Components/shoppingCart/PaymentDetails'

function CheckoutAlternativee() {
  const theme = useTheme()


  const [form, setform] = useState({});

   


  return (
    <Box
    sx={{
      py: 5,
      mt: "10px",
      bgcolor: theme.palette.bg.main,
    }}
  >
    <Container
    
    sx={{
      px: { xs: "0", md: "16px" },
    }}
    className="container">

    

      <Stack

        
        direction={{ xs: "column", md: "row" }}
        sx={{
          width: "100%",
          alignItems: "start",
          gap: "20px",
        }}
        
      >




        <Stack
        component={"form"}
        onSubmit={(event)=>{
          
          event.preventDefault();





          alert(JSON.stringify({
            "name": form.name || "",
            "cardNo": form.cardNo || "",
            "expiry": form.expiry || "",
            "cvc": form.cvc || "",
            "save": form.save || "",
            "voucher": form.voucher || "",
          }))
        
        
        }}

        sx={{
          width: { xs: "100%", md: "700px" },
          flexGrow:1,
          gap:"20px"
        }}
       
       >




        <DeliveryDateAndTime form={form}  setform={setform}/>
        
        <DeliveryAddress  form={form} setform={setform}/>



        <PaymentDetails form={form} setform={setform} />
       
        


      



        </Stack>


        <OrderAccounts />
        

        
      </Stack>


      
    </Container>
  </Box>
  )
}

export default CheckoutAlternativee