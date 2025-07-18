import { DeleteOutlineOutlined, Edit } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

// Address Api
const address = [
  {
    place: "Home",
    streetLine1: "375 Subidbazaar, MA 2351",
    addressLine2: "435 Bristol, MA 2351",
    phone: "+17804084466",
    style: "this1",
  },
  {
    place: "Office",
    streetLine1: "375 Subidbazaar, MA 2351",
    addressLine2: "435 Bristol, MA 2351",
    phone: "+17804084466",
    style: "this2",
  },
  {
    place: "Office2",
    streetLine1: "375 Subidbazaar, MA 2351",
    addressLine2: "435 Bristol, MA 2351",
    phone: "+17804084466",
    style: "this3",
  }
];

function DeliveryAddress() {
  const theme = useTheme();

  const [className, setclassName] = useState({});
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: "20px",
        borderRadius: "10px",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          sx={{
            mb: "15px",
          }}
        >
          <Avatar sx={{ bgcolor: "error.main" }} alt="Remy Sharp">
            2
          </Avatar>
          <Typography component="h6" variant="h6">
            Delivery Address
          </Typography>
        </Stack>

        <Button variant="outlined" color="error">
          Add NewAddress
        </Button>
      </Stack>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", lg: "space-between" },
          gap: 3,
          flexWrap: "wrap",
          paddingTop: "10px",
        }}
      >
        {address.map((ele,index) => {

          const targetClassName=ele.style

return(

        
          <Box
          key={index}
            onClick={() => {
              setclassName({ ...Avatar, [targetClassName] : "border" });
            }}
            className={className[targetClassName]}
            sx={{
              width: { xs: "95%", lg: "48%" },
              borderRadius: "10px",
              bgcolor: theme.palette.myColor.main,
              paddingBottom: "10px",
              cursor: "pointer",
            }}
          >
            <Stack alignItems="flex-start">
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "4px 4px 0 0",
                }}
              >
                <IconButton size="small">
                  <Edit fontSize="small" />
                </IconButton>

                <IconButton size="small">
                  <DeleteOutlineOutlined fontSize="small" color="error" />
                </IconButton>
              </Box>
              <Box
                sx={{
                  padding: "0 10px",
                }}
              >
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    fontSize: "15px",
                  }}
                >
                  {ele.place}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    fontSize: "14px",
                    color: theme.palette.text.secondary,
                  }}
                >
                  {ele.streetLine1}
                  <br />
                  {ele.addressLine2}
                  <br />
                  {ele.phone}
                </Typography>
              </Box>
            </Stack>
          </Box>
)})}
      </Box>
    </Box>
  );
}

export default DeliveryAddress;
