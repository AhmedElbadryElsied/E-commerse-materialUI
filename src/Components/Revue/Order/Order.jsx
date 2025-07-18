import OrderDeta from "./OrderDeta";
import { Box, useTheme } from "@mui/material";
import HeaderRevue from "../HeaderRevue";
import { ShoppingBagOutlined } from "@mui/icons-material";

function Order() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <HeaderRevue
        hedre="Orders"
        icon={
          <ShoppingBagOutlined
            sx={{
              color: theme.palette.myColor.colorBadge,
            }}
          />
        }
      />

      <OrderDeta />
    </Box>
  );
}

export default Order;
