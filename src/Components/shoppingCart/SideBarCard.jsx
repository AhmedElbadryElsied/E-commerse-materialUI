import {
  AddBoxOutlined,
  Close,
  IndeterminateCheckBoxOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useShopingCart } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

function SideBarCard({ toggleDrawer, state }) {
  const theme = useTheme();

  // Data Showes In SideBar

  const {
    totalPrice,
    itemsShowes,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShopingCart();

  return (
    <Drawer
      sx={{
        ".MuiPaper-root": {
          borderRadius: "8px 0px 0px 8px",
        },
      }}
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
    >
      <Box
        sx={{
          height: "100%",
          minWidth: "350px",
          position: "relative",
          mt: "80px",
        }}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: "15px",
            py: "20px",
            position: "fixed",
            top: "0",
            minWidth: "350px",
            bgcolor: theme.palette.myColor.bgSideBarHeader,
            zIndex: "1",
          }}
        >
          <Stack direction={"row"} gap={1} alignItems={"center"}>
            <ShoppingBagOutlined fontSize="large" />

            <Typography component={"span"} variant="span">
              <Typography pr="4px" component={"span"} variant="span">
                {itemsShowes.length}
              </Typography>
              item
            </Typography>
          </Stack>

          <IconButton
            onClick={toggleDrawer("right", false)}
            sx={{
              "&:hover": {
                color: "red",
                rotate: "180deg",
                transition: "all 0.3s ",
              },
            }}
          >
            <Close />
          </IconButton>
        </Stack>

        <Divider />

        <Box
          sx={{
            pb: "120px",
          }}
        >
          {itemsShowes.map((item, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                px: "15px",
                bgcolor: "inherit",
                alignItems: "center",
                gap: 2,
                borderRadius: "0 !important",
                py: "10px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 80, height: 80, borderRadius: "5px" }}
                image={item.imgs[0]}
                alt="img card"
              />

              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <CardContent
                  sx={{
                    p: "0 !important",
                  }}
                >
                  <Typography
                    component="div"
                    variant="p"
                    sx={{ color: "text.primary", fontSize: "14px" }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    ${item.price} <Close sx={{ mx: "2px" }} fontSize="10px" />{" "}
                    {getItemQuantity(item.id)}
                  </Typography>
                  <Stack direction="row" alignItems="center" gap={1}>
                    <IconButton
                      onClick={() => increaseCartQuantity(item.id)}
                      size="small"
                    >
                      <AddBoxOutlined />
                    </IconButton>

                    {getItemQuantity(item.id)}

                    <IconButton
                      disabled={getItemQuantity(item.id) <= 1}
                      onClick={() => decreaseCartQuantity(item.id)}
                      size="small"
                    >
                      <IndeterminateCheckBoxOutlined />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Box>

              <IconButton
                onClick={() => {
                  removeFromCart(item.id);
                }}
                sx={{
                  "&:hover": {
                    color: "red",
                    rotate: "180deg",
                    transition: "all 0.3s ",
                  },
                }}
              >
                <Close />
              </IconButton>
            </Card>
          ))}
        </Box>

        <Stack
          sx={{
            position: "fixed",
            bottom: "0",
            minWidth: "350px",
            bgcolor: theme.palette.myColor.bgSideBarHeader,
            zIndex: "1",
            px: "30px",
            py: "20px",
            gap: "10px",
          }}
        >
          <Link to={"/checkout-alternative"}>
            <Button
              onClick={toggleDrawer("right", false)}
              variant="contained"
              sx={{
                width: "100%",
              }}
            >
              Checkout Now (${totalPrice})
            </Button>
          </Link>

          <Link to="/cart">
            <Button
              onClick={toggleDrawer("right", false)}
              variant="outlined"
              sx={{
                width: "100%",
              }}
            >
              View Cart
            </Button>
          </Link>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default SideBarCard;
