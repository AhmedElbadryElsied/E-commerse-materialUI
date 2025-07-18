import {
  Close,
  ExpandMore,
  KeyboardArrowRight,
  MenuBook,
  Window,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Header3() {
  // Start Menu functions Drawer

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // theam Color Style
  const theam = useTheme();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // End Menu functions Drawer

  // Drawer and menue Content map function

  const drawerContent = [
    {
      title: "Home",
      supTitle: [
        { name: "order", Path: "/review" },
        { name: "wishlist", Path: "/review/wishlist" },
        { name: "support tickets", Path: "/review/support-tickets" },
        { name: "profile info", Path: "/review/profile-info" },
        { name: "addresses", Path: "/review/addresses" },
        { name: "payment methods", Path: "/review/payment-methods" },
      ],
    },
    {
      title: "Mega Menu",
      supTitle: [
        { name: "order", Path: "/review" },
        { name: "wishlist", Path: "/review/wishlist" },
        { name: "support tickets", Path: "/review/support-tickets" },
        { name: "profile info", Path: "/review/profile-info" },
        { name: "addresses", Path: "/review/addresses" },
        { name: "payment methods", Path: "/review/payment-methods" },
      ],
    },
    {
      title: "full screen menu",
      supTitle: [
        { name: "order", Path: "/review" },
        { name: "wishlist", Path: "/review/wishlist" },
        { name: "support tickets", Path: "/review/support-tickets" },
        { name: "profile info", Path: "/review/profile-info" },
        { name: "addresses", Path: "/review/addresses" },
        { name: "payment methods", Path: "/review/payment-methods" },
      ],
    },
    {
      title: "pages",
      supTitle: [
        { name: "order", Path: "/review" },
        { name: "wishlist", Path: "/review/wishlist" },
        { name: "support tickets", Path: "/review/support-tickets" },
        { name: "profile info", Path: "/review/profile-info" },
        { name: "addresses", Path: "/review/addresses" },
        { name: "payment methods", Path: "/review/payment-methods" },
      ],
    },
    {
      title: "user account",
      supTitle: [
        { name: "order", Path: "/review" },
        { name: "wishlist", Path: "/review/wishlist" },
        { name: "support tickets", Path: "/review/support-tickets" },
        { name: "profile info", Path: "/review/profile-info" },
        { name: "addresses", Path: "/review/addresses" },
        { name: "payment methods", Path: "/review/payment-methods" },
      ],
    },
    {
      title: "vendor account",
      supTitle: [
        { name: "order", Path: "/review" },
        { name: "wishlist", Path: "/review/wishlist" },
        { name: "support tickets", Path: "/review/support-tickets" },
        { name: "profile info", Path: "/review/profile-info" },
        { name: "addresses", Path: "/review/addresses" },
        { name: "payment methods", Path: "/review/payment-methods" },
      ],
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
        px: { xs: "0", md: "16px" },
      }}
      
 
  
    className="container"
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            display: "flex",
            bgcolor: theam.palette.myColor.main,
            color: theam.palette.text.secondary,
          }}
        >
          <Window />

          <Typography
            variant="p"
            component="p"
            sx={{
              p: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categores
          </Typography>

          <Box flexGrow={1} />

          <KeyboardArrowRight />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: "220px",
              bgcolor: theam.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bike</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBook fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack direction={"row"} alignItems={"center"} gap={"1rem"} mr={10}>
          {drawerContent.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                ":hover .show-links": { display: "block" },
                ":hover": { cursor: "pointer" },
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.2rem",
                }}
              >
                {item.title}
                <ExpandMore />
              </Typography>

              <Box
                className="show-links"
                sx={{
                  minWidth: 180,
                  position: "absolute",
                  top: "100%",
                  left: "-40px",
                  display: "none",
                  zIndex: "2",
                }}
              >
                <Paper
                  sx={{
                    mt: 3,
                    zIndex: 120,
                  }}
                  // aria-label="secondary mailbox folders"
                >
                  <List
                    sx={{
                      "& .css-8omfb9-MuiListItem-root": {
                        display: "block",
                      },
                      zIndex: 120,
                    }}
                  >
                    {item.supTitle.map((item, index) => {
                      

                      return !item.supLinks ? (
                        <ListItem
                          key={index}
                          sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                          disablePadding
                        >
                          <Link
                            to={item.Path}
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                            }}
                          >
                            <ListItemButton>
                              <ListItemText primary={item.name} />
                            </ListItemButton>
                          </Link>
                        </ListItem>
                      ) : (
                        <ListItem
                          key={index}
                          sx={{
                            ".MuiTypography-root": { fontSize: "14px" },
                            ":hover .show-Sublinks": { display: "block" },
                          }}
                          disablePadding
                        >
                          <Link
                            to={item.Path}
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                            }}
                          >
                            <ListItemButton>
                              <ListItemText primary={item.name} />
                            </ListItemButton>
                          </Link>

                          {/* <List
                      className="show-Sublinks"
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "100%",
                        minWidth: "100px",
                        display: "none",
                      }}
                    >
                      <Paper
                        sx={{
                          ml: 1,
                        }}
                      >
                        {item.supLinks.map((item, index) => (
                          <ListItem
                            key={index}
                            sx={{
                              ".MuiTypography-root": { fontSize: "13px" },
                            }}
                            disablePadding
                          >
                            <ListItemButton>
                              <ListItemText primary={item} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </Paper>
                    </List> */}
                        </ListItem>
                      );
                    })}
                  </List>
                </Paper>
              </Box>
            </Box>
          ))}
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        sx={{
          ".MuiPaper-root , .css-hmtqcd-MuiPaper-root-MuiDrawer-paper": {
            maxHeight: "90%",
          },
        }}
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        <Box
          sx={{
            minWidth: "380px",
            mx: "auto",
            mt: "100px",
            mb: "50px",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              height: "40px",
            }}
          >
            <IconButton
              onClick={toggleDrawer("top", false)}
              sx={{
                position: "absolute",
                top: "0px",
                right: "5px",
                "&:hover": {
                  color: "red",
                  rotate: "180deg",
                  transition: "all 0.3s ",
                },
              }}
            >
              <Close />
            </IconButton>
          </Typography>

          {drawerContent.map((item, index) => {
            return (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    ".css-yfrx4k-MuiAccordionSummary-content": {
                      my: "0",
                    },
                  }}
                >
                  <Typography component="span">{item.title}</Typography>
                </AccordionSummary>

                <AccordionDetails
                  className="padding-0"
                  sx={{
                    ".MuiList-root , .MuiList-padding": {
                      pt: "0",
                      pb: "0",
                    },
                  }}
                >
                  <List
                    sx={{
                      ".MuiButtonBase-root": {
                        p: "0",
                        width: "100%",
                      },
                    }}
                  >
                    {item.supTitle.map((item, index) => {
                      return (
                        <ListItem
                          key={index}
                          sx={{
                            ".MuiAccordionDetails-root": { py: "0" },
                            py: "0",
                          
                            
                          }}
                        >
                          <Link
                            to={item.Path}
                            
                            style={{
                              textDecoration: "none",
                              color:"inherit",
                              width:"100%"
                            }}
                          >
                            <ListItemButton
                            
                           
                            
                            >
                              <ListItemText primary={item.name} />
                            </ListItemButton>
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}

export default Header3;
