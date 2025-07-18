import React from 'react';
import Box from '@mui/material/Box';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

function ShoppingStages() {



  const location =useLocation();


  const theme = useTheme();

  return (
    <Box>
    <Box
    
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent:"center",
      mt: '25px',
      pt:"20px",
      bgcolor: theme.palette.bg.main,
    }}
    
    >
      <Link to="/cart">
      <Button
      variant={location.pathname === "/cart" || location.pathname === "/cart/checkout" || location.pathname ===  "/cart/payment"  ?'contained' : 'outlined'}
      color='error'
      sx={{
        borderRadius:"20px"
      }}
      >
        1.Cart
      </Button>
      </Link>

      
      <Typography
      sx={{
        bgcolor:location.pathname ===  "/cart/checkout"   ||location.pathname ===  "/cart/payment"  ?"error.main" :  theme.palette.myColor.bgColor,
        width:"50px",
        height:"4px",
      }}
      >

      </Typography>

      <Link to="/cart/checkout">
      <Button
      variant= {location.pathname ===  "/cart/checkout"   || location.pathname ===  "/cart/payment" ?'contained' : 'outlined'}
      color='error'
      sx={{
        borderRadius:"20px"
      }}
      >
        2.Details
      </Button>
      </Link>


      <Typography
      sx={{
        bgcolor:location.pathname === "/cart/payment"  ?"error.main" :  theme.palette.myColor.bgColor,
        width:"50px",
        height:"4px",
      }}
      >

      </Typography>
      <Link to="/cart/payment">
      <Button
      variant={location.pathname === "/cart/payment" ?'contained' : 'outlined'}
      color='error'
      sx={{
        borderRadius:"20px"
      }}
      >
        3.Payment
      </Button>
      </Link>


      <Typography
      sx={{
        bgcolor:false ?"error.main" :  theme.palette.myColor.bgColor,
        width:"50px",
        height:"4px",
      }}
      >

      </Typography>
      <Button
      variant='outlined'
      color='error'
      disabled
      sx={{
        borderRadius:"20px"
      }}
      >
        4.Review
      </Button>
      
    

      
      
    </Box>

    <Outlet />
    </Box>
  );
}


export default ShoppingStages