import { Box, Button, Stack, Typography } from "@mui/material";

import { AddShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import { useShopingCart } from "../../context/ShoppingCartContext";
import { useDrawer } from "../../context/DrawerContext";

function ProductDetails({ item, handleClose }) {
  const handelImgShows = (value) => {
    setIndexImg(value);
  };

  const [IndexImg, setIndexImg] = useState(0);

  const { increaseCartQuantity } = useShopingCart();

  const { toggleDrawer } = useDrawer();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{
        direction: "row",
      }}
      alignItems="center"
      gap={2}
    >
      <Box>
        <img
          width={300}
          height={300}
          style={{ transform: "scaley(1.04)" }}
          src={item.imgs[IndexImg]}
          alt="..."
        />
      </Box>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            letterSpacing: "2px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "crimson",
            fontSize: "22px",
            my: 0.4,
          }}
        >
          ${item.price}
        </Typography>

        <Typography variant="body1">{item.describtion}</Typography>

        <Stack direction="raw" flexWrap="wrap" gap={1} my="10px">
          {item.imgs.map((item, index) => (
            <img
              onClick={() => handelImgShows(index)}
              className="hover"
              style={{ cursor: "pointer" }}
              key={index}
              width={70}
              src={item}
              alt="..."
            />
          ))}
        </Stack>

        <Button
          // onClick={toggleDrawer("right", true)}

          onClick={() => {
            increaseCartQuantity(item.id);
            toggleDrawer("right", true);
            handleClose();
          }}
          variant="contained"
        >
          <AddShoppingCart sx={{ mr: 1 }} />
          Bay Now
        </Button>
      </Box>
    </Stack>
  );
}

export default ProductDetails;
