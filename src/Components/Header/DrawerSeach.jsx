import { Box, Drawer, IconButton, InputBase, List, ListItem, ListItemText, Menu, MenuItem, styled, useTheme } from "@mui/material"
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ExpandMore } from "@mui/icons-material";


function DrawerSeach() {
    
    const theam =useTheme();

    const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

      const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
  }));

  const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "150px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const options = ["All Categories", "CAR", "clothes", "Electronics"];

const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  

  return (
    <Box>
          <IconButton
           onClick={toggleDrawer("top" , true)}
        
        sx={{
          display:{xs:"flex" , sm:"none"}
        }}
        >
         
                    <SearchIcon />
        </IconButton>

    <Drawer
            anchor="top"
            open={state["top"]}
            onClose={toggleDrawer("top", false)}


            sx={{

                "& .MuiPaper-elevation16":{
                                    
                    width:"100%",
                    height:"35vh",
                    display:"grid",
                    placeContent:"center",
                },
                          
            }}


          >




            <Search
        sx={{
          borderRadius: "22px",
          display:"flex",
          alignItems: "center",
          justifyContent: "space-between",
          width:"95%",
          m:"0",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <List
          component="nav"
          aria-label="Device settings"
          sx={{
            bgcolor: theam.palette.myColor.main,
            borderRadius: " 0 22px  22px 0",
            p: "0",
          }}
        >
          <ListItem
          
            sx={{ display: "flex", cursor: "pointer" }}
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              sx={{ width: 95, textAlign: "center" }}
              secondary={options[selectedIndex]}
            />

            <ExpandMore />
          </ListItem>

          
        </List>

        <Menu
       
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
          
          sx={{

            "& .MuiPaper-elevation":{
                position:"absolute",
                top:" 20% !important",
                left:"60% !important",
            }
          }}

         
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              sx={{ fontSize: "14px" }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

      </Search> 
          </Drawer>
    </Box>
  )
}

export default DrawerSeach