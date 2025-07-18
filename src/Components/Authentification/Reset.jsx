import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Reset() {
  const [form, setForm] = useState({
    email: "",
  });
  const [inputValidator, setinputValidator] = useState({
    email: false,
  });

  const reset = () => {
    const emailValid = form.email?.trim() !== "";

    const handelResetButton = () => {
      return {
        email: !emailValid,
      };
    };

    if (emailValid) {
      alert(JSON.stringify(form, null, 2));
    }
    const result = handelResetButton();

    setinputValidator(result);
  };

  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%", lg: "30%" },
          py: "20px",
          px: "40px",
          mt: "40px",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            textAlign: "center",
            mb: "23px",
          }}
          variant="body1"
        >
          Reset your password
        </Typography>

        <Stack alignItems="center" justifyContent="center" gap="20px">
          <TextField
            type="email"
            value={form.email}
            onChange={(item) => setForm({ ...form, email: item.target.value })}
            fullWidth
            label="Email"
            id="fullWidth"
            color="error"
            error={inputValidator.email}
            helperText={inputValidator.email ? "Email is required" : null}
            sx={{
              "& .MuiOutlinedInput-input": {
                borderRadius: "10px",
                pt: "13px",
                pb: "10px",
              },
              "& .MuiInputLabel-formControl": {
                lineHeight: "15px",
              },
            }}
          />

          <Button
            type="submit"
            onClick={reset}
            sx={{
              borderRadius: "10px",
              textTransform: "capitalize",
              fontSize: "14px",
              width: "100%",
              bgcolor: theme.palette.myColor.colorBadge,
              "&:hover": {
                bgcolor: theme.palette.error.dark,
              },
            }}
            variant="contained"
          >
            reset
          </Button>
        </Stack>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            mt: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
            }}
            variant="body1"
          >
            Don't have an account?
          </Typography>
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
            to={"/register"}
          >
            <Typography
              sx={{
                fontSize: "14px",
                borderBottom: "1px solid",
              }}
              variant="body1"
            >
              Register
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}

export default Reset;
