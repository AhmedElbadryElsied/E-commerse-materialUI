import { Avatar, Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import img1 from "../../assets/img/Amex.svg";
import img2 from "../../assets/img/Mastercard.svg";
import img3 from "../../assets/img/Visa.svg";

const address = [
  { no: "************4632", img: img1 },
  { no: "************6578", img: img2 },
  { no: "************3754", img: img3 },
];
function PaymentDetails({form , setform}) {
  const theme = useTheme();

  const [className, setclassName] = useState({});

 const [voucherStyle, setvoucherStyle] = useState(true)
 
//  Handel input of the form
const handelNameInput = (event)=>{
  setform({...form , name : event.target.value})
}
const handelCardNoInput = (event)=>{
  setform({...form , cardNo : event.target.value})
}
const handelExpiryInput = (event)=>{
  setform({...form , expiry : event.target.value})
}
const handelCvcInput = (event)=>{
  setform({...form , cvc : event.target.value})
}
const handelCheckBoxSave = (event)=>{
  setform({...form , save : event.target.checked})
}
const handelVoucherInput = (event)=>{
  setform({...form , voucher : event.target.value})
}


 

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: "20px",
        borderRadius: "10px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        sx={{
          mb: "15px",
        }}
      >
        <Avatar sx={{ bgcolor: "error.main" }} alt="Remy Sharp">
          3
        </Avatar>
        <Typography component="h6" variant="h6">
          Payment Details
        </Typography>
      </Stack>

        <Box>

          <Typography component="p" variant="p">
          Enter Card Information
          </Typography>

          <Stack

          direction={{xs:"column", sm:"row"}}
         
          
          gap={2}
          
          >
          <TextField
          value={form.name || ""}
          onChange={handelNameInput}
          color="error"
          label="Name"

        />




          <TextField
          value={form.cardNo || ""}
          onChange={handelCardNoInput}
          color="error"
          label="card No"

          inputProps={{
            minLength:"7",
            maxLength:"7"
          }}
        />



          <TextField
          onChange={handelExpiryInput}
          value={form.expiry || ""}
          color="error"
          label="Expiry"

          inputProps={{
            minLength:"7",
            maxLength:"7"
          }}
        />



          <TextField
          onChange={handelCvcInput}
          value={form.cvc || ""}
          color="error"
          label="CVC"

          inputProps={{
            minLength:"3",
            maxLength:"3"
          }}
        />



          </Stack>

          <Box
          
          sx={{
            marginTop:"10px",
          }}
          
          >
          <FormControlLabel control={<Checkbox color="error" onChange={handelCheckBoxSave}  />} label="save this card" />
          </Box>


        </Box>


      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          gap: 3,
          flexWrap: "wrap",
          paddingTop: "10px",
        }}
      >
        {address.map((ele, index) => {
          const targetClassName = ele.no;

          return (
            <Box
              key={index}
              onClick={() => {

                 className[targetClassName] === "border" ? setclassName({}) : setclassName({ ...Avatar, [targetClassName]: "border" });
              }}
              className={className[targetClassName]}
              sx={{
                width: { xs: "95%", sm: "48%" },
                borderRadius: "10px",
                bgcolor: theme.palette.myColor.main,
                paddingBottom: "10px",
                cursor: "pointer",
                padding:"20px 0 20px 20px",
              }}
            >
              <Box>
                
              <img  src={ele.img} alt="...." />

              </Box>

              <Box
              
              sx={{
                lineHeight:"1.2"
              }}
              
              
              > 
              <Typography component="p" variant="p">
                {ele.no}
              </Typography>
              <Typography component="p" variant="p">
              Jaslynn Land
              </Typography>



              </Box>

              
              


              
            </Box>
          );
        })}
      </Box>

      <Typography
      
      onClick={()=>{
        voucherStyle  ? setvoucherStyle(false) : setvoucherStyle(true);  
      }}

      
      component="p" variant="p" sx={{ my: "20px" , cursor:"pointer", color:"error.main" }}>
        I have a voucher
      </Typography>



      <Box

      
      sx={{
        display:"flex",
        alignItems:"center",
        gap:"10px",
        position:voucherStyle ? "absolute" : "sticky",
        zIndex:voucherStyle ? "-1" : "1",
      }}
      
      >




      <TextField
          onChange={handelVoucherInput}
          value={form.voucher || ""}
          color="error"
          label="Enter voucher code here"
          
        />
        <Button
        variant="contained"
        color="error"
        
        >
          Apply
        </Button>



      </Box>

      <Box
      
      
      
      >
        <Button 
        color="error"
        variant="contained"
        sx={{
          my:"20px",
          py:"12px",
          px:"30px"
        }}
        type="submit"
        >
          place order
        </Button>
      </Box>
    </Box>
  );
}

export default PaymentDetails;
