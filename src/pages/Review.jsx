import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material'
import {  Outlet } from 'react-router-dom'
import DashBord from '../Components/Revue/DashBord';
import AnchorTemporaryDrawer from '../Components/Revue/SidebarRevue';

function Review() {
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
      direction="row"
      gap={useMediaQuery('(min-width:1280px)')? 3 : 0}
      >

        {
        useMediaQuery('(min-width:1280px)') || <AnchorTemporaryDrawer /> 
        }

      <DashBord /> 

      <Outlet />

      

      </Stack>


    </Container>

    

  </Box>
  
    

  )
}

export default Review