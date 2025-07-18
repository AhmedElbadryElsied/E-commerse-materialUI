import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Fragment } from "react";
import { useDrawerRevueContext } from "../../context/DrawerRevueContext";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  FavoriteBorderOutlined,
  PaymentRounded,
  PersonOutlined,
  PlaceOutlined,
  ShoppingBagOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const { state, toggleDrawer } = useDrawerRevueContext();

  const matches = useMediaQuery("(min-width:400px)");
  const theme = useTheme();
  const location = useLocation();

  const list = () => (
    <Box>
      <Box>
        <Typography
          color={theme.palette.text.disabled}
          fontSize="13px"
          sx={{
            textTransform: "uppercase",
            p: "30px",
            pb: "20px",
          }}
          variant="body1"
        >
          dashboard
        </Typography>

        <List
          sx={{
            p: "0",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/review"
            onClick={toggleDrawer("left", false)}
          >
            <ListItem
              alignItems="center"
              sx={{
                color:
                  location.pathname === "/review"
                    ? theme.palette.myColor.colorBadge
                    : theme.palette.text.secondary,
                py: "0",
                borderLeft: ` solid 5px transparent`,
                borderColor:
                  location.pathname === "/review"
                    ? `  ${theme.palette.myColor.colorBadge}`
                    : "none",
                mb: "15px",
                ":hover": {
                  color: theme.palette.myColor.colorBadge,
                  borderLeft: ` solid 5px ${theme.palette.myColor.colorBadge}`,
                },
                transition: "all 0.5s",
                // To enlarge the entire drawer display
                width: matches ? "300px" : "350px",
              }}
            >
              <ShoppingBagOutlined
                sx={{
                  color: theme.palette.text.disabled,
                }}
              />

              <ListItemText
                sx={{ textTransform: "capitalize", pl: "15px" }}
                primary="orders"
              />

              <Typography variant="p" component={"p"}>
                5
              </Typography>
            </ListItem>
          </Link>

          <Link
            style={{
              textDecoration: "none",
            }}
            to="wishlist"
            onClick={toggleDrawer("left", false)}
          >
            <ListItem
              alignItems="center"
              sx={{
                color:
                  location.pathname === "/review/wishlist"
                    ? theme.palette.myColor.colorBadge
                    : theme.palette.text.secondary,
                py: "0",
                borderLeft: ` solid 5px transparent`,
                borderColor:
                  location.pathname === "/review/wishlist"
                    ? `  ${theme.palette.myColor.colorBadge}`
                    : "none",
                mb: "15px",
                ":hover": {
                  color: theme.palette.myColor.colorBadge,
                  borderLeft: ` solid 5px ${theme.palette.myColor.colorBadge}`,
                },
                transition: "all 0.5s",
              }}
            >
              <FavoriteBorderOutlined
                sx={{
                  color: theme.palette.text.disabled,
                }}
              />

              <ListItemText
                sx={{ textTransform: "capitalize", pl: "15px" }}
                primary="wishlist"
              />

              <Typography variant="p" component={"p"}>
                19
              </Typography>
            </ListItem>
          </Link>

          <Link
            style={{
              textDecoration: "none",
            }}
            to="support-tickets"
            onClick={toggleDrawer("left", false)}
          >
            <ListItem
              alignItems="center"
              sx={{
                color:
                  location.pathname === "/review/support-tickets"
                    ? theme.palette.myColor.colorBadge
                    : theme.palette.text.secondary,
                py: "0",
                borderLeft: ` solid 5px transparent`,
                borderColor:
                  location.pathname === "/review/support-tickets"
                    ? `  ${theme.palette.myColor.colorBadge}`
                    : "none",
                mb: "15px",
                ":hover": {
                  color: theme.palette.myColor.colorBadge,
                  borderLeft: ` solid 5px ${theme.palette.myColor.colorBadge}`,
                },
                transition: "all 0.5s",
              }}
            >
              <SupportAgentOutlined
                sx={{
                  color: theme.palette.text.disabled,
                }}
              />

              <ListItemText
                sx={{ textTransform: "capitalize", pl: "15px" }}
                primary="support tickets"
              />

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
            p: "30px",
            pb: "20px",
          }}
          variant="body1"
        >
          account settings
        </Typography>

        <List
          sx={{
            p: "0",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            to="profile-info"
            onClick={toggleDrawer("left", false)}
          >
            <ListItem
              alignItems="center"
              sx={{
                color:
                  location.pathname === "/review/profile-info"
                    ? theme.palette.myColor.colorBadge
                    : theme.palette.text.secondary,
                py: "0",
                borderLeft: ` solid 5px transparent`,
                borderColor:
                  location.pathname === "/review/profile-info"
                    ? `  ${theme.palette.myColor.colorBadge}`
                    : "none",
                mb: "15px",
                ":hover": {
                  color: theme.palette.myColor.colorBadge,
                  borderLeft: ` solid 5px ${theme.palette.myColor.colorBadge}`,
                },
                transition: "all 0.5s",
              }}
            >
              <PersonOutlined
                sx={{
                  color: theme.palette.text.disabled,
                }}
              />

              <ListItemText
                sx={{ textTransform: "capitalize", pl: "15px" }}
                primary="profile info"
              />
            </ListItem>
          </Link>

          <Link
            style={{
              textDecoration: "none",
            }}
            to="addresses"
            onClick={toggleDrawer("left", false)}
          >
            <ListItem
              alignItems="center"
              sx={{
                color:
                  location.pathname === "/review/addresses"
                    ? theme.palette.myColor.colorBadge
                    : theme.palette.text.secondary,
                py: "0",
                borderLeft: ` solid 5px transparent`,
                borderColor:
                  location.pathname === "/review/addresses"
                    ? `  ${theme.palette.myColor.colorBadge}`
                    : "none",
                mb: "15px",
                ":hover": {
                  color: theme.palette.myColor.colorBadge,
                  borderLeft: ` solid 5px ${theme.palette.myColor.colorBadge}`,
                },
                transition: "all 0.5s",
              }}
            >
              <PlaceOutlined
                sx={{
                  color: theme.palette.text.disabled,
                }}
              />

              <ListItemText
                sx={{ textTransform: "capitalize", pl: "15px" }}
                primary="addresses"
              />

              <Typography variant="p" component={"p"}>
                16
              </Typography>
            </ListItem>
          </Link>

          <Link
            style={{
              textDecoration: "none",
            }}
            to="payment-methods"
            onClick={toggleDrawer("left", false)}
          >
            <ListItem
              alignItems="center"
              sx={{
                color:
                  location.pathname === "/review/payment-methods"
                    ? theme.palette.myColor.colorBadge
                    : theme.palette.text.secondary,
                py: "0",
                borderLeft: ` solid 5px transparent`,
                borderColor:
                  location.pathname === "/review/payment-methods"
                    ? `  ${theme.palette.myColor.colorBadge}`
                    : "none",
                mb: "15px",
                ":hover": {
                  color: theme.palette.myColor.colorBadge,
                  borderLeft: ` solid 5px ${theme.palette.myColor.colorBadge}`,
                },
                transition: "all 0.5s",
              }}
            >
              <PaymentRounded
                sx={{
                  color: theme.palette.text.disabled,
                }}
              />

              <ListItemText sx={{ pl: "15px" }} primary="payment methods" />

              <Typography variant="p" component={"p"}>
                4
              </Typography>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );

  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer("left", false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
