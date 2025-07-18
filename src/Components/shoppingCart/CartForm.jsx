import {
  Box,
  Button,
  Divider,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useShopingCart } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

function CartForm() {
  // Data of selct input in the form

  const currencies = [
    {
      value: "Egypt",
    },
    {
      value: "Emarat",
    },
    {
      value: "Sodeian",
    },
    {
      value: "canada",
    },
  ];

  //Total Price in the form

  const { totalPrice } = useShopingCart();

  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: "20px",
        borderRadius: "10px",
        width: { xs: "100%", md: "400px" },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb="15px"
      >
        <Typography component="p" variant="p" sx={{ color: "text.secondary" }}>
          Total:
        </Typography>

        <Typography
          component="h5"
          variant="h5"
          sx={{
            color: "text.primary",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          ${totalPrice}
        </Typography>
      </Stack>

      <Divider />

      <Stack
        direction="row"
        textAlign="center"
        gap="10px"
        sx={{
          my: "15px",
        }}
      >
        <Typography component="p" variant="p" sx={{ color: "text.primary" }}>
          Additional Comments
        </Typography>

        <Typography
          component="p"
          variant="p"
          sx={{
            bgcolor: theme.palette.myColor.bgColor,
            color: theme.palette.error.main,
            fontWeight: "400",
            fontSize: "12px",
            px: "15px",
            py: "3px",
            borderRadius: "5px",
          }}
        >
          Note
        </Typography>
      </Stack>

      <Box component="form">
        <TextField
          fullWidth
          color="error"
          id="fullWidth"
          multiline
          minRows={6}
          sx={{
            ".MuiInputBase-root": {
              height: "150px",
              py: "4px !important",
              px: "2px !important",
            },
            ".MuiInputBase-input": {
              height: "100% !important",
              overflow: "auto !important",
              px: "10px !important",
            },
          }}
        />

        <TextField
          color="error"
          sx={{
            my: "15px",
          }}
          fullWidth
          label="Voucher"
          id="fullWidth"
          placeholder="Voucher"
        />

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

        <Divider />
        <Typography
          component="p"
          variant="p"
          sx={{
            my: "15px",
          }}
        >
          Shipping Estimates
        </Typography>

        <TextField
          id="outlined-select-currency"
          select
          label="Country"
          color="error"
          sx={{
            width: "100%",
          }}
        >
          {currencies.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency"
          select
          label="Country"
          defaultValue="Egypt"
          color="error"
          sx={{
            width: "100%",
            my: "15px",
          }}
        >
          {currencies.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Zip Code"
          color="error"
          sx={{
            width: "100%",
            my: "15px",
          }}
          placeholder="3100"
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
          calCulate Shipping
        </Button>

        <Link to="/cart/checkout">
          <Button
            variant="contained"
            color="error"
            sx={{
              width: "100%",
              fontSize: "14px",
            }}
          >
            Checkout Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default CartForm;
