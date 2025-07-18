import { CategoryOutlined, Home, PersonOutline, ShoppingCart } from '@mui/icons-material'
import { Badge, Box, Link, Stack, Typography, useTheme  } from '@mui/material'
import {Link as RouterLink, useLocation} from "react-router-dom"
import { useDrawer } from '../../context/DrawerContext';
import { useShopingCart } from '../../context/ShoppingCartContext';
function FixedButtonNavBar() {

    const theme = useTheme();
    const { toggleDrawer } = useDrawer();
      const { itemsShowes } = useShopingCart();
    
    

   

    const location = useLocation().pathname;


    


    return (


  
  <Box 
  
  sx={{
      px:"35px",
      py:"10px",
      bgcolor:"background.paper",
      position:"fixed",
      bottom:0,
      width:"100%",
      zIndex:"100",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between"
  }}

  >

      <Link

      component={RouterLink}
      to={"/"}
      
      
      sx={{
          color:location === "/" ? theme.palette.myColor.colorBadge : "inherit",
          textDecoration:"none",
          "&:hover":{
           color:theme.palette.myColor.colorBadge
          },
          
        
      }}

      >
      
      <Stack
      

      alignItems={"center"}

      >

          <Home />

          <Typography 
          
          fontSize={"14px"}
          
          
          variant="body1" >
              Home
          </Typography>

      </Stack>
      
      
      </Link>
      
      <Link

      component={RouterLink}
      to={"/review/wishlist"}
      
      
      sx={{
          color:location === "/review/wishlist" ? theme.palette.myColor.colorBadge : "inherit",
          textDecoration:"none",
          "&:hover":{
           color:theme.palette.myColor.colorBadge
          },
          
        
      }}

      >
      
      <Stack
      

      alignItems={"center"}

      >

          <CategoryOutlined />

          <Typography 
          
          fontSize={"14px"}
          
          
          variant="body1" >
              Category
          </Typography>

      </Stack>
      
      
      </Link>

      <Link

      component={RouterLink}
      
      onClick={toggleDrawer("right", true)}
      
      
      sx={{
          color:"inherit",
          textDecoration:"none",
          "&:hover":{
           color:theme.palette.myColor.colorBadge
          },
          
        
      }}

      >
      
      <Stack
      

      alignItems={"center"}

      >

                   <Badge  

                 
                   
                   
                   
                   badgeContent={itemsShowes.length} color="primary" >
                     <ShoppingCart />
                   </Badge>

          <Typography 
          
          fontSize={"14px"}
          
          
          variant="body1" >
              Home
          </Typography>

      </Stack>
      
      
      </Link>

      <Link

      component={RouterLink}
      to={"/review/profile-info"}
      
      
      sx={{
          color:location === "/review/profile-info" ? theme.palette.myColor.colorBadge : "inherit",
          textDecoration:"none",
          "&:hover":{
           color:theme.palette.myColor.colorBadge
          },
          
        
      }}

      >
      
      <Stack
      

      alignItems={"center"}

      >

          <PersonOutline />

          <Typography 
          
          fontSize={"14px"}
          
          
          variant="body1" >
              Acount
          </Typography>

      </Stack>
      
      
      </Link>
      
  </Box>
)
}

export default FixedButtonNavBar