import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useShopingCart } from "../../context/ShoppingCartContext";

function TotalPriceAndTaxesOfPayment() {
  // Data Showes In SideBar

  const { totalPrice } = useShopingCart();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: "20px",
        borderRadius: "10px",
        width: { xs: "100%", md: "400px" },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          component="p"
          variant="p"
          sx={{
            color: "text.secondary",
          }}
        >
          Subtotal:
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          ${totalPrice}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          component="p"
          variant="p"
          sx={{
            color: "text.secondary",
          }}
        >
          Shipping:
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          -
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          component="p"
          variant="p"
          sx={{
            color: "text.secondary",
          }}
        >
          Tax:
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          $40
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          component="p"
          variant="p"
          sx={{
            color: "text.secondary",
          }}
        >
          Discount:
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            color: "text.primary",
          }}
        >
          $40
        </Typography>
      </Stack>

      <Divider sx={{ my: "15px" }} />

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "end",
        }}
      >
        $ {totalPrice + 40 - 40}
      </Typography>
    </Box>
  );
}

export default TotalPriceAndTaxesOfPayment;
