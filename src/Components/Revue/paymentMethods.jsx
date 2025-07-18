import {
  Box,
  Grid,
  IconButton,
  Pagination,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import HeaderRevue from "./HeaderRevue";
import { Create, Delete, PaymentRounded } from "@mui/icons-material";
import amex from "../../assets/img/Amex.svg";
import masterCard from "../../assets/img/Mastercard.svg";
import paypal from "../../assets/img/PayPal.svg";
import visa from "../../assets/img/Visa.svg";
import { useState } from "react";
function PaymentMethods() {
  const theme = useTheme();

  const pageSize = 5;

  const [pagination, setpagination] = useState({
    count:0,
    from:0,
    to: pageSize
  });

  const handelPagination = (item , page)=>{

    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

      setpagination({...pagination, from , to})

    console.log(from , to)
  }

  const paymentMethods = [
    {
      img: masterCard,
      number: "1234 **** **** ****",
      hestory: "11/ 2024",
    },
    {
      img: paypal,
      number: "1234 **** **** ****",
      hestory: "1 / 2025",
    },
    {
      img: masterCard,
      number: "1234 **** **** ****",
      hestory: "3 / 2004",
    },
    {
      img: visa,
      number: "1234 **** **** ****",
      hestory: "9 / 2004",
    },
    {
      img: masterCard,
      number: "1234 **** **** ****",
      hestory: "10 / 2020",
    },
    {
      img: masterCard,
      number: "1234 **** **** ****",
      hestory: "5 / 2022",
    },
    {
      img: amex,
      number: "1234 **** **** ****",
      hestory: "10 / 2025",
    },
   
  ];

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      
      <HeaderRevue
        hedre="Payment Methods"
        icon={
          <PaymentRounded
            sx={{
              color: theme.palette.myColor.colorBadge,
            }}
          />
        }
      />

      {paymentMethods.slice(pagination.from,pagination.to).map((item, index) => (
        <Paper
        key={index}
          sx={{
            my: "20px",
            py: "10px",
            px: "15px",
            cursor: "pointer",
          }}
        >
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img src={item.img} alt="amex logo" />
                <Typography variant="body1">relf edward</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "200px",
                  textTransform: "capitalize",
                }}
                variant="body1"
              >
                {item.number}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body1">{item.hestory}</Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: { xs: "start", sm: "end" },
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    borderRadius: "13px",
                  }}
                >
                  <Delete fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: "13px",
                  }}
                >
                  <Create fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Pagination
      sx={{
        mt:"30px",
        "& .css-1c5o7vy-MuiPagination-ul":{
          justifyContent:"center"
        }
      }}
      onChange={handelPagination}
        color="secondary"
        count={Math.ceil(paymentMethods.length / pageSize)}
        variant="outlined"
        shape="rounded"
      />

      
    </Box>
  );
}

export default PaymentMethods;
