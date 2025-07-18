import { ArrowForward, AttachMoney } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const data = [
  {
    id: "#aljfd90-92346-lksdfhi324",
    orderType: "pending",
    date: "nov 10,2024",
    price: "350",
  },
  {
    id: "#aljd90-92346-lkhi324",
    orderType: "processing",
    date: "nov 13,2024",
    price: "500",
  },
  {
    id: "#aljd90-92a6743ljfh346-6hi4",
    orderType: "delivered",
    date: "dec 18,2025",
    price: "700",
  },
  {
    id: "#jd90-9243ljfh346-i4",
    orderType: "delivered",
    date: "oct 25,2025",
    price: "700",
  },
  {
    id: "#al345jfs-a3lsdkjy346-6hi4",
    orderType: "cancelled",
    date: "nov 30,2025",
    price: "300",
  },
];

function OrderDeta() {
  const theme = useTheme();

  return (
    <Box>
      {data.map((order, index) => {
        return (
          
            <Box
            key={index}
              sx={{
                bgcolor: "background.paper",
                p: "15px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // eslint-disable-next-line react-hooks/rules-of-hooks
                flexDirection: useMediaQuery("(min-width:600px)")
                  ? "row"
                  : "column",
                gap: "10px",
                cursor: "pointer",
                mt: "20px",
              }}
            >
              <Stack
                sx={{
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  width: useMediaQuery("(min-width:600px)") ? "45%" : "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="p" component="p">
                  {order.id}
                </Typography>

                {/* <Typography 
         
         
                     sx={{
         
                         color: "#000",
                         bgcolor:theme.palette.divider,
                         px:"15px",
                         py:"4px",
                         borderRadius:"20px",
                         fontSize:"14px",
                         fontWeight:"100"
         
                     }}
         
         
                     variant="p" component="span" >
                         pending
                     </Typography> */}

                {order.orderType === "pending" ? (
                  <Chip
                    sx={{ color: theme.palette.text.secondary }}
                    label={order.orderType}
                  />
                ) : order.orderType === "processing" ? (
                  <Chip
                    sx={{ color: theme.palette.primary.contrastText }}
                    label={order.orderType}
                    color="primary"
                  />
                ) : order.orderType === "delivered" ? (
                  <Chip
                    sx={{
                      color: theme.palette.success.dark,
                      bgcolor: theme.palette.success.light,
                    }}
                    label={order.orderType}
                  />
                ) : (
                  <Chip
                    sx={{ color: theme.palette.error.contrastText }}
                    label={order.orderType}
                    color="error"
                  />
                )}
              </Stack>

              <Stack
                sx={{
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  width: useMediaQuery("(min-width:600px)") ? "45%" : "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "14px",
                    fontWeight: "100",
                  }}
                  variant="p"
                  component="p"
                >
                  nov 10,2024
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textTransform: "capitalize",
                    fontSize: "14px",
                    fontWeight: "100",
                  }}
                  variant="p"
                  component="span"
                >
                  <AttachMoney fontSize="small" />

                  <Typography
                    sx={{
                      pr: "12px",
                    }}
                    variant="span"
                    component="span"
                  >
                    500
                  </Typography>
                </Typography>

                {
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  useMediaQuery("(min-width:600px)") ? (
                    <Avatar
                      sx={{
                        bgcolor: "transparent",
                        ":hover": {
                          bgcolor: theme.palette.grey[200],
                          cursor: "pointer",
                        },
                      }}
                      variant="rounded"
                    >
                      <ArrowForward
                        sx={{
                          color: theme.palette.grey[500],
                        }}
                      />
                    </Avatar>
                  ) : null
                }
              </Stack>
            </Box>
        );
      })}
    </Box>
  );
}

export default OrderDeta;
