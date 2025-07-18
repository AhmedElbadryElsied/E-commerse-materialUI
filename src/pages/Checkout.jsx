// import React, { use, useEffect } from 'react'
import { Box, Button, Container, Stack, useTheme } from '@mui/material'
import TotalPriceAndTexas from '../Components/shoppingCart/TotalPriceAndTexas';
import ShippingAddress from '../Components/shoppingCart/ShippingAddress';
import BillingAddress from '../Components/shoppingCart/BillingAddress';
import { Link } from 'react-router-dom';

function Checkout() {



  const theme = useTheme();

  


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
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "20px",
        }}
      >

        <Stack

        sx={{
          width: { xs: "100%", md: "700px" },
          flexGrow:1,
          gap:"20px"
        }}
       
       >





       <ShippingAddress />



        <BillingAddress />
        


        <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      gap={2}
      justifyContent="space-between"
      >

        <Link to="/cart"
        

        style={{
          textDecoration:"none",
          width:"100%"
        }}

        >
        
      <Button
          variant="outlined"
          color="error"
          sx={{
            width: "100%",
            fontSize: "14px",
          }}
        >
          Back To Cart 
        </Button>

        </Link>



          <Link to="/cart/payment" 
          
          style={{
            textDecoration:"none",
            width:"100%"
          }}
          
          >
          
        <Button
        
          variant="contained"
          color="error"
          sx={{
            width: "100%",
            fontSize: "14px",
          }}
        >
          proceed To payment
        </Button>

          </Link>




      </Stack>



        </Stack>



        <TotalPriceAndTexas />

        
      </Stack>


      
    </Container>
  </Box>
  )
}

export default Checkout