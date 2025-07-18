import {
  LocalGroceryStoreOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleImg from "../../assets/img/google-1.c59cb133.svg";
import FaceBookImg from "../../assets/img/facebook-filled-white.f92d5efd.svg";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const theme = useTheme();

  const [form, setForm] = useState({
    fName: "",
    emaOrPhon: "",
    password: "",
    rPassword: "",
    signningup: "",
  });
  const [inputValidator, setInputValidator] = useState({
    fName: false,
    emaOrPhon: false,
    password: false,
    rPassword: false,
  });

  const handelFNameInput = (item) => {
    setForm({ ...form, fName: item.target.value });
  };

  const handelEmaOrPhonInput = (item) => {
    setForm({ ...form, emaOrPhon: item.target.value });
   
  };

  const handelpasswordInput = (item) => {
    setForm({ ...form, password: item.target.value });
  };

  const handelRPasswordInput = (item) => {
    setForm({ ...form, rPassword: item.target.value });
  };

  const handelSignningupInput = (item) => {
    setForm({ ...form, signningup: item.target.checked });
  
  };

  const register = () => {
    const fNameValid = form.fName?.trim() !== "";
    const emaOrPhoneValid = form.emaOrPhon?.trim() !== "";
    const passwordValid = form.password?.trim() !== "";
    const rPasswordValid = form.rPassword?.trim() !== "";

    const handelRegisterButton = () => {
      
      return{
        fName: !fNameValid,
        emaOrPhon: !emaOrPhoneValid,
        password: !passwordValid,
        rPassword: !rPasswordValid,
      }
      
      
    };

    const result = handelRegisterButton();

    setInputValidator(result);
    if(rPasswordValid && passwordValid && emaOrPhoneValid && fNameValid){

          alert(JSON.stringify(form , null , 2))
    }
  };


  return (
    <Box
      sx={{
        width: "100%",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%", lg: "30%" },
          p: "20px",
          mt: "40px",
        }}
      >
        <Stack
          alignItems={"center"}
          sx={{
            my: "20px",
            textAlign: "center",
          }}
        >
          <Link
            to="/"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <LocalGroceryStoreOutlined
              sx={{
                fontSize: "30px",
              }}
            />

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
              }}
              variant="p"
              component={"p"}
            >
              Welcome To E-commerce
            </Typography>
          </Link>
        </Stack>

        <Box
          sx={{
            width: "100%",
            px: { xs: "0px", sm: "25px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  mb: "5px",
                }}
                variant="body1"
              >
                Full Name
              </Typography>

              <TextField
                value={form.fName}
                onChange={handelFNameInput}
                error = {inputValidator.fName}
                helperText={inputValidator.fName ? "Name is required" : null}
                id="fullWidth"
                fullWidth
                multiline
                color="error"
                placeholder="Ralph Award"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    p: "10px",
                  },
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  mb: "5px",
                }}
                variant="body1"
              >
                Email or Phone Number
              </Typography>

              <TextField
                value={form.emaOrPhon}
                onChange={handelEmaOrPhonInput}
                error={inputValidator.emaOrPhon}
                helperText={inputValidator.emaOrPhon ? "Email is required" : null}
                id="fullWidth"
                fullWidth
                multiline
                color="error"
                placeholder="exmple@gmail.com"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    p: "10px",
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  mb: "5px",
                }}
                variant="body1"
              >
                password
              </Typography>

              <TextField
                sx={{
                  "& .MuiInputBase-inputAdornedEnd": {
                    pt: "13px",
                    pb: "9px",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                value={form.password}
                onChange={handelpasswordInput}
                error={inputValidator.password}
                helperText={inputValidator.password ? "Password is required" : null}
                placeholder="********"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  mb: "5px",
                }}
                variant="body1"
              >
                Retype Password
              </Typography>

              <TextField
                sx={{
                  "& .MuiInputBase-inputAdornedEnd": {
                    pt: "13px",
                    pb: "9px",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                value={form.rPassword}
                onChange={handelRPasswordInput}
                error={inputValidator.rPassword}
                helperText={inputValidator.rPassword ? "Please re-type password" : null}
                placeholder="********"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <FormControlLabel
              onChange={handelSignningupInput}
              sx={{
                m: 0,
                width: "80%",
                "& .MuiFormControlLabel-label": {
                  fontSize: "14px",
                },
              }}
              control={
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  color="error"
                />
              }
              label="By signing up , you agree to terms & Condition"
            />

            <Button
              onClick={register}
              sx={{
                borderRadius: "10px",
                textTransform: "capitalize",
                fontSize: "16px",
                bgcolor: theme.palette.myColor.colorBadge,
                "&:hover": {
                  bgcolor: theme.palette.error.dark,
                },
              }}
              variant="contained"
            >
              create an account
            </Button>
          </Box>

          <Divider
            sx={{
              my: "20px",
              px: "25px",
            }}
          >
            or
          </Divider>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Button
              sx={{
                borderRadius: "10px",
                bgcolor: theme.palette.primary.dark,
                gap: "10px",
                py: "9px",
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                  boxShadow: "none",
                },
              }}
              variant="contained"
            >
              <img src={FaceBookImg} alt="facebook Icon" />

              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
                variant="body1"
              >
                continue with google
              </Typography>
            </Button>

            <Button
              sx={{
                borderRadius: "10px",
                bgcolor: theme.palette.primary.light,
                gap: "10px",
                py: "9px",
                "&:hover": {
                  bgcolor: theme.palette.primary.light,
                  boxShadow: "none",
                },
              }}
              variant="contained"
            >
              <img src={GoogleImg} alt="facebook Icon" />

              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
                variant="body1"
              >
                continue with google
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              mt: "30px",
              mb: "20px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Already have an account?
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  borderBottom: "1px solid",
                  marginLeft: "10px",
                  paddingBottom: "1.5px",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
                to={"/login"}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Register;
