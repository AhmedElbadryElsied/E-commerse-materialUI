import {
  ExpandMore,
  LocalGroceryStoreOutlined,
  PermIdentity,
} from "@mui/icons-material";
import {
  Badge,
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import SideBarCard from "../shoppingCart/SideBarCard";
import { useShopingCart } from "../../context/ShoppingCartContext";
import { useDrawer } from "../../context/DrawerContext";
import { useState } from "react";
import DrawerSeach from "./DrawerSeach";

// Start Searth function

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

// options of search

const options = ["All Categories", "CAR", "clothes", "Electronics"];

//  end Searth function

//  Start Notification function

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

//  End Notification function

function Header2() {
  // Start menu Search function
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // end menu Search function

  // theam Color Style
  const theam = useTheme();

  const { itemsShowes } = useShopingCart();

  const { toggleDrawer, state } = useDrawer();

  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
        px: { xs: "0", md: "16px" },
      }}
      
   
    className="container"
    >
      <Link
        to="/"
        style={{
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <Stack alignItems={"center"}>
          <LocalGroceryStoreOutlined />

          <Typography variant="p" component={"p"}>
            E-commerce
          </Typography>
        </Stack>
      </Link>

      <Search
        sx={{
          borderRadius: "22px",
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
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
            sx={{ display: { xs: "none", sm: "flex" }, cursor: "pointer" }}
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

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={1}
      >
        <DrawerSeach />

        <IconButton onClick={toggleDrawer("right", true)}>
          <StyledBadge badgeContent={itemsShowes.length} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <Link to="/login">
          <IconButton>
            <PermIdentity />
          </IconButton>
        </Link>
      </Stack>

      <SideBarCard toggleDrawer={toggleDrawer} state={state} />
    </Container>
  );
}

export default Header2;
