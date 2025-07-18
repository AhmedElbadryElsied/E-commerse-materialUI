import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useShopingCart } from "../../context/ShoppingCartContext";

function OrderAccounts() {
  // Data Showes In SideBar

  const { totalPrice, cartItems, itemsShowes } = useShopingCart();

  return (
    <Box
      sx={{
        p: "20px",
        borderRadius: "10px",
        width: { xs: "100%", md: "550px" },
      }}
    >
      <Typography
        sx={{
          pb: "15px",
          fontSize: "17px",
          fontWeight: "550",
        }}
        component="h6"
        variant="h6"
      >
        Your order
      </Typography>
      <Stack gap={2}>
        {itemsShowes.map((item, index) => (
          <Stack key={index} direction="row" justifyContent="space-between">
            <Typography component="p" variant="p">
              {cartItems.find((cartItem) => cartItem.id === item.id)?.quantity}{" "}
              x {item.title}
            </Typography>

            <Typography component="p" variant="p">
              $
              {Number.parseFloat(itemsShowes[0].price.slice(1)) *
                cartItems.find((cartItem) => cartItem.id === item.id)?.quantity}
            </Typography>
          </Stack>
        ))}

        <Divider sx={{ my: "15px" }} />
      </Stack>
      <Stack gap={1}>
        <Stack
          sx={{
            color: "text.secondary",
          }}
          direction="row"
          justifyContent="space-between"
        >
          <Typography component="p" variant="p">
            Subtotal:{" "}
          </Typography>

          <Typography component="p" variant="p">
            ${totalPrice}
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              color: "text.secondary",
            }}
            component="p"
            variant="p"
          >
            Shipping:{" "}
          </Typography>

          <Typography component="p" variant="p">
            -
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              color: "text.secondary",
            }}
            component="p"
            variant="p"
          >
            Tax:{" "}
          </Typography>

          <Typography component="p" variant="p">
            $40
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            sx={{
              color: "text.secondary",
            }}
            component="p"
            variant="p"
          >
            Discount:{" "}
          </Typography>

          <Typography component="p" variant="p">
            -
          </Typography>
        </Stack>
        <Divider sx={{ my: "15px" }} />
      </Stack>
      <Stack gap={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography component="p" variant="p">
            Total:{" "}
          </Typography>

          <Typography component="p" variant="p">
            ${totalPrice + 40}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default OrderAccounts;
