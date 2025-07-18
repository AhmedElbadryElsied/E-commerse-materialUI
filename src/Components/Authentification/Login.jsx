import {
  LocalGroceryStoreOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
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

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const theme = useTheme();


  const [form, setForm] = useState({
    email:"",
    password:""
  });
  const [inputValidate, setInputValidate] = useState({
    email:true,
    password:true
  });


  const login = ()=>{

    const handelLoginButton = ()=>{
  
      const isEmailValid = form.email?.trim() !== "";
  
      const isPasswordValid = form.password?.trim() !== "";
  
      console.log(!isEmailValid ,!isPasswordValid)
  
      if(!isEmailValid && !isPasswordValid){
  
        return {email:false , password: false}
      }
      if(!isEmailValid){
  
        return {email:false , password: true}
      }
      if(!isPasswordValid){
  
        return {email:true , password: false}
      }
  
      alert(JSON.stringify(form , null , 2));
  
      return {email: true , password: true};
  
      
    }
    
    const result = handelLoginButton();

    setInputValidate(result);

  }


  




  // console.log(validateForm.email)

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
          width:{xs:"90%" ,  sm:"70%" , md:"50%" , lg:"30%"},
          p: "20px",
          mt:"40px",
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
            px:{xs:"0px" , sm:"25px"}
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
                Email or Phone Number
              </Typography>

              <TextField

              value={form.email}

              onChange={(item)=>{setForm({...form , email : item.target.value})}}
                id="fullWidth"

                error = {!inputValidate.email}
                helperText = {!inputValidate.email ? "Email is required" : null}

                fullWidth
                multiline
                color="error"
                placeholder="example@gmail.com"
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


value={form.password}
onChange={(item)=>{setForm({...form , password : item.target.value})}}
                sx={{
                  "& .MuiInputBase-inputAdornedEnd": {
                    pt: "13px",
                    pb: "9px",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
                error ={!inputValidate.password}
                helperText={!inputValidate.password ? "Password is required" : null}
                color="error"
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

            <Button

            onClick={login}
              sx={{
                borderRadius: "10px",
                textTransform: "capitalize",
                fontSize: "20px",
                bgcolor: theme.palette.primary.light,
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
              variant="contained"
            >
              login
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
              my: "20px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Don't have account?
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
                to={"/register"}
              >
                Register
              </Link>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              bgcolor: theme.palette.mode === "light" ?  theme.palette.grey[200] : theme.palette.grey[800],
              py:"16px",
              borderRadius:"5px"
            }}
          >
            <Typography
              sx={{ fontSize: "15px", fontWeight: "500" }}
              variant="body1"
            >
              Forgot your password?
            </Typography>
            <Typography variant="body1">
              <Link
                style={{
                  color:"inherit",
                  fontSize: "15px",
                  fontWeight: "500",
                  textDecoration:"none",
                  borderBottom:"1px solid "
                }}
                to={"/reset"}
              >
                Reset It
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
