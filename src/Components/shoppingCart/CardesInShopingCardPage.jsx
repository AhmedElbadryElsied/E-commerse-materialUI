import {
  AddBoxOutlined,
  Close,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import {
  Box,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useShopingCart } from "../../context/ShoppingCartContext";
import Card from "@mui/material/Card";

function CardesInShopingCardPage() {
  // Data Showes In Card

  const {
    itemsShowes,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShopingCart();

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "700px" },
        flexGrow: 1,
      }}
    >
      {itemsShowes.map((item, index) => {
        return (
          <Card
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              px: "15px",
              background: "background.paper",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
              borderRadius: "0 !important",
              // eslint-disable-next-line no-dupe-keys
              px: "20px !important",
              py: "10px !important",
              // eslint-disable-next-line no-dupe-keys
              borderRadius: "10px",
              mb: "20px",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: "80px", md: "100px" },
                height: 100,
                borderRadius: "5px",
              }}
              image={item.imgs[0]}
              alt="img card"
            />

            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <CardContent
                sx={{
                  p: { xs: "0", md: "16px" },
                }}
              >
                <Typography
                  component="h4"
                  variant="h5"
                  sx={{ color: "text.primary" }}
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
                  {item.price}

                  <Close sx={{ mx: "2px" }} fontSize="10px" />

                  {getItemQuantity(item.id)}

                  <Typography
                    component="span"
                    variant="span"
                    sx={{
                      color: "red",
                      ml: 1,
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    $
                    {Number.parseFloat(item.price.slice(1)) *
                      getItemQuantity(item.id)}
                  </Typography>
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
                position: "absolute",
                top: "10px",
                right: "10px",
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
        );
      })}
    </Box>
  );
}

export default CardesInShopingCardPage;
