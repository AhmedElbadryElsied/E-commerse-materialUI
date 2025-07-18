/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { Close } from "@mui/icons-material";
import { useState } from "react";
import ProductDetails from "../ProductDetails";

function Slidercard({ slide }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        px: "10px",
        py: "20px",
        cursor: "pointer",
        borderRadius: "10px",
        "&:hover": {
          border: "1px solid",
        },
        "&:hover img": {
          scale: "1.2",
        },
        bgcolor:"background.paper"
      }}
    >
      <img
        style={{
          width: "100%",
          transition: "0.5s",
        }}
        src={slide.imgs[0]}
        alt="Cart image"
      />

      <Stack alignItems="center" gap="5px">
        <Typography
          sx={{
            fontSize: "14px",
          }}
          variant="body1"
        >
          {slide.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "600",
          }}
          variant="body1"
        >
          ${slide.price}
        </Typography>
        <Rating readOnly size="small" value={slide.rating} />

        <Button
          onClick={handleClickOpen}
          sx={{
            textTransform: "capitalize",
            width: "100%",
            border: `1px solid ${theme.palette.myColor.buttonSideBar} `,
            color: "inherit",
            mt: "10px",
            "& :hover": {
              bgcolor: theme.palette.grey[400],
            },
          }}
        >
          add to cart
        </Button>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "90%", md: "800px" },
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "20px",
            "&:hover": {
              color: "red",
              rotate: "180deg",
              transition: " 0.3s ",
            },
          }}
        >
          <Close />
        </IconButton>

        <ProductDetails item={slide} handleClose={handleClose} />
      </Dialog>
    </Box>
  );
}

export default Slidercard;
