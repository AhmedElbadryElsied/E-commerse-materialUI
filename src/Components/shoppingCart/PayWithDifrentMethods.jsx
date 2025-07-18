import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";

function PayWithDifrentMethod() {
  const credit = useRef();
  const Paypal = useRef();
  const Delivery = useRef();

  const [checkd, setCheckd] = useState({});

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: "10px",
      }}
    >
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Box
          sx={{
            p: "20px",
          }}
        >
          <FormControlLabel
            value="Pay with credit card"
            control={
              <Radio
              color="error"
                ref={credit}
                onChange={(e) => {
                  setCheckd({ ...checkd, credit: e.target.checked });
                }}
              />
            }
            label="Pay with credit card"
          />

          {credit.current ? (
            credit.current.firstChild.checked ? (
              <Box>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  gap={{ xs: 0, sm: 2 }}
                  sx={{}}
                >
                  <Box>
                    <TextField
                      label="Card Number"
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                    ></TextField>
                    <TextField
                      label="Name on Card"
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                    ></TextField>
                  </Box>

                  <Box>
                    <TextField
                      placeholder="MM/YY"
                      label="Exp Data"
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                    ></TextField>

                    <TextField
                      label="Name on Card"
                      color="error"
                      sx={{
                        width: "100%",
                        my: "15px",
                      }}
                    ></TextField>
                  </Box>
                </Stack>

                <Button color="error" variant="outlined">
                  submit
                </Button>
              </Box>
            ) : null
          ) : null}
        </Box>

        <Divider />

        <Box
          sx={{
            p: "20px",
          }}
        >
          <FormControlLabel
            value="Pay with Paypal"
            control={
              <Radio
              color="error"
                ref={Paypal}
                onChange={(e) => {
                  setCheckd({ ...checkd, Paypal: e.target.checked });
                }}
              />
            }
            label="Pay with Paypal"
          />

          {credit.current ? (
            Paypal.current.firstChild.checked ? (
              <Stack direction="row" alignItems="center" gap={2}>
                <TextField
                  label="Paypal Email"
                  color="error"
                  sx={{
                    width: "100%",
                    my: "15px",
                  }}
                ></TextField>

                <Button color="error" variant="outlined">
                  submit
                </Button>
              </Stack>
            ) : null
          ) : null}
        </Box>

        <Divider />

        <Divider />

        <Box
          sx={{
            p: "20px",
          }}
        >
          <FormControlLabel
            value="Cash On Delivery"
            control={
              <Radio
              color="error"
                ref={Delivery}
                onChange={(e) => {
                  setCheckd({ ...checkd, Delivery: e.target.checked });
                }}
              />
            }
            label="Cash On Delivery"
          />
        </Box>
      </RadioGroup>
    </Box>
  );
}

export default PayWithDifrentMethod;
