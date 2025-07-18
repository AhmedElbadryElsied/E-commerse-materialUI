import {  FavoriteBorderOutlined, PaymentRounded, PersonOutlined, PlaceOutlined, ShoppingBagOutlined, SupportAgentOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function DashBord() {
  const theme = useTheme();
  const location =useLocation();
  const matches = useMediaQuery('(min-width:1280px)');
  return (
    <Box sx={{
        
        borderRadius:"10px",
         pb:"15px", 
         width: "100%",
         maxWidth: 320,
         maxHeight:450,
         bgcolor: "background.paper",
         display:matches ? "block"  : "none"
 }} 
 >
    


<Box>
        <Typography 
        
        color={theme.palette.text.disabled}
        
        fontSize="13px"
        
        sx={{ 
            textTransform: "uppercase",
            p:"30px",
            pb:"20px",
            
        }} 
        
        variant="body1">
          dashboard
        </Typography>

        <List
        sx={{
            p:"0"
        }}
        >

<Link style={{
    textDecoration:"none"
}} to="/review">

<ListItem
            alignItems="center"
            sx={{
              color: location.pathname === "/review" ? theme.palette.myColor.colorBadge : theme.palette.text.secondary,
                py:"0",
                borderLeft:` solid 5px transparent`,
                borderColor:location.pathname === "/review" ?`  ${theme.palette.myColor.colorBadge}`: "none",
                mb:"15px",
                ":hover":{
                    color:theme.palette.myColor.colorBadge,
                    borderLeft:` solid 5px ${theme.palette.myColor.colorBadge}`,
                },
                transition:"all 0.5s"
                
            }}
          >
            <ShoppingBagOutlined 
            
            
            
            
            sx={{
                color:theme.palette.text.disabled
            }}

             />

            <ListItemText sx={{ textTransform:"capitalize", pl: "15px" }} 
            primary="orders" />

            <Typography variant="p" component={"p"}>
              5
            </Typography>
          </ListItem>

</Link>
          



<Link style={{
    textDecoration:"none"
}} to="wishlist">

<ListItem
            alignItems="center"
            sx={{
                color: location.pathname === "/review/wishlist" ? theme.palette.myColor.colorBadge : theme.palette.text.secondary,
                  py:"0",
                  borderLeft:` solid 5px transparent`,
                  borderColor:location.pathname === "/review/wishlist" ?`  ${theme.palette.myColor.colorBadge}`: "none",
                  mb:"15px",
                  ":hover":{
                      color:theme.palette.myColor.colorBadge,
                      borderLeft:` solid 5px ${theme.palette.myColor.colorBadge}`,
                  },
                  transition:"all 0.5s"
                  
              }}
          >
            <FavoriteBorderOutlined
             sx={{
                color:theme.palette.text.disabled
            }} />

            <ListItemText sx={{textTransform:"capitalize", pl: "15px" }} 
            primary="wishlist" />

            <Typography variant="p" component={"p"}>
              19
            </Typography>
          </ListItem>

</Link>

         


<Link style={{
    textDecoration:"none"
}} to="support-tickets">

<ListItem
            alignItems="center"
            sx={{
                color: location.pathname === "/review/support-tickets" ? theme.palette.myColor.colorBadge : theme.palette.text.secondary,
                  py:"0",
                  borderLeft:` solid 5px transparent`,
                  borderColor:location.pathname === "/review/support-tickets" ?`  ${theme.palette.myColor.colorBadge}`: "none",
                  mb:"15px",
                  ":hover":{
                      color:theme.palette.myColor.colorBadge,
                      borderLeft:` solid 5px ${theme.palette.myColor.colorBadge}`,
                  },
                  transition:"all 0.5s"
                  
              }}
          >
            <SupportAgentOutlined
             sx={{
                color:theme.palette.text.disabled
            }} />

            <ListItemText sx={{textTransform:"capitalize", pl: "15px" }} 
            primary="support tickets" />

            <Typography variant="p" component={"p"}>
              5
            </Typography>
          </ListItem>

</Link>

         



          




          
        </List>
      </Box>

      <Box>
        <Typography 
        
        color={theme.palette.text.disabled}
        
        fontSize="13px"
        
        sx={{ 
            textTransform: "uppercase",
            p:"30px",
            pb:"20px",
            
        }} 
        
        variant="body1">
          account settings
        </Typography>

        <List
        sx={{
            p:"0"
        }}
        >

<Link style={{
    textDecoration:"none"
}} to="profile-info">

<ListItem
            alignItems="center"
            sx={{
                color: location.pathname === "/review/profile-info" ? theme.palette.myColor.colorBadge : theme.palette.text.secondary,
                  py:"0",
                  borderLeft:` solid 5px transparent`,
                  borderColor:location.pathname === "/review/profile-info"?`  ${theme.palette.myColor.colorBadge}`: "none",
                  mb:"15px",
                  ":hover":{
                      color:theme.palette.myColor.colorBadge,
                      borderLeft:` solid 5px ${theme.palette.myColor.colorBadge}`,
                  },
                  transition:"all 0.5s"
                  
              }}
          >
            <PersonOutlined 
             sx={{
                color:theme.palette.text.disabled
            }}/>

            <ListItemText sx={{ textTransform:"capitalize", pl: "15px" }} 
            primary="profile info" />

            
          </ListItem>

</Link>



<Link style={{
    textDecoration:"none"
}} to="addresses">

<ListItem
            alignItems="center"
            sx={{
                color: location.pathname === "/review/addresses" ? theme.palette.myColor.colorBadge : theme.palette.text.secondary,
                  py:"0",
                  borderLeft:` solid 5px transparent`,
                  borderColor:location.pathname === "/review/addresses" ?`  ${theme.palette.myColor.colorBadge}`: "none",
                  mb:"15px",
                  ":hover":{
                      color:theme.palette.myColor.colorBadge,
                      borderLeft:` solid 5px ${theme.palette.myColor.colorBadge}`,
                  },
                  transition:"all 0.5s"
                  
              }}
          >
            <PlaceOutlined 
             sx={{
                color:theme.palette.text.disabled
            }}/>

            <ListItemText sx={{textTransform:"capitalize", pl: "15px" }} 
            primary="addresses" />

            <Typography variant="p" component={"p"}>
              16
            </Typography>
          </ListItem>

</Link>
          

<Link style={{
    textDecoration:"none"
}} to="payment-methods">


<ListItem
            alignItems="center"
            sx={{
                color: location.pathname === "/review/payment-methods" ? theme.palette.myColor.colorBadge : theme.palette.text.secondary,
                  py:"0",
                  borderLeft:` solid 5px transparent`,
                  borderColor:location.pathname === "/review/payment-methods" ?`  ${theme.palette.myColor.colorBadge}`: "none",
                  mb:"15px",
                  ":hover":{
                      color:theme.palette.myColor.colorBadge,
                      borderLeft:` solid 5px ${theme.palette.myColor.colorBadge}`,
                  },
                  transition:"all 0.5s"
                  
              }}
          >
            <PaymentRounded 
             sx={{
                color:theme.palette.text.disabled
            }}/>

            <ListItemText sx={{ pl: "15px" }} 
            primary="payment methods" />

            <Typography variant="p" component={"p"}>
              4
            </Typography>
          </ListItem>

</Link>
         
                  




          
        </List>
      </Box>
      



    </Box>
  );
}

export default DashBord;
