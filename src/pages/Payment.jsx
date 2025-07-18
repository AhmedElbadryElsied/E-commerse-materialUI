import { useTheme } from '@emotion/react';
import { Box, Button, Container, Stack } from '@mui/material';
import React from 'react'
import TotalPriceAndTaxesOfPayment from '../Components/shoppingCart/TotalPriceAndTaxesOfPayment';
import PayWithDifrentMethod from '../Components/shoppingCart/PayWithDifrentMethods';
import { Link } from 'react-router-dom';

function Payment() {
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

       







      
        


    



       

        <Box
        
        sx={{
          
          width: { xs: "100%", md: "700px" },
          flexGrow: 1,
        }}
        
        >

       <PayWithDifrentMethod />

       <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      gap={2}
      justifyContent="space-between"
      pt="15px"
      >

        <Link to="/cart/checkout"
        
        style={{
          textDecoration:"none",
          width:"100%",
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
          Back To Checkout 
        </Button>

        </Link>



        <Link to="/review"
        
        style={{
          textDecoration:"none",
          width:"100%",
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
          Review
        </Button>

        </Link>





      </Stack>

        </Box>



       <TotalPriceAndTaxesOfPayment />



        

        
      </Stack>


      
    </Container>
  </Box>
  )
}

export default Payment