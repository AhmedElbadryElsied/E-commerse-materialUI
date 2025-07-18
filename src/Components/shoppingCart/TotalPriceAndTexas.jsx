import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useShopingCart } from "../../context/ShoppingCartContext";

function TotalPriceAndTexas() {
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
          Discount:
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

      <Divider sx={{ my: "15px" }} />

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        ${totalPrice}
      </Typography>

      <TextField
        id="outlined-basic"
        color="error"
        sx={{
          width: "100%",
          my: "15px",
        }}
        placeholder="Voucher"
      ></TextField>

      <Button
        variant="outlined"
        color="error"
        sx={{
          width: "100%",
          fontSize: "14px",
          mb: "20px",
        }}
      >
        Apply Voucher
      </Button>
    </Box>
  );
}

export default TotalPriceAndTexas;
