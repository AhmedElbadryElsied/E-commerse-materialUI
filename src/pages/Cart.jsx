import { Box, Container, Stack, useTheme } from "@mui/material";

import CardesInShopingCardPage from "../Components/shoppingCart/CardesInShopingCardPage";
import CartForm from "../Components/shoppingCart/CartForm";

function Cart() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 5,
        // mt: "10px",
        bgcolor: theme.palette.bg.main,
      }}
    >
      <Container
      
      sx={{
        px: { xs: "0", md: "16px" },
      }}
      className="container">


        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "start",
            gap: "20px",
          }}
        >
          <CardesInShopingCardPage />

          <CartForm />
          
        </Stack>
      </Container>
    </Box>
  );
}

export default Cart;
