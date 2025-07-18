import React, { useState } from "react";
import { Box, Pagination, Stack, useTheme } from "@mui/material";
import RecipeReviewCard from "./Card";
import { cardsContentWishList } from "../../../db";
import { useShopingCart } from "../../../context/ShoppingCartContext";
import HeaderRevue from "../HeaderRevue";
import { FavoriteBorderOutlined } from "@mui/icons-material";

function WichLest() {
  const theme = useTheme();
  const { increaseCartQuantity } = useShopingCart();

 
  const [numCurdesInPage, setnumCurdesInPage] = useState({
    size: 6,
    from: 0,
    to: 6,
  });

  const handelPageCurdes = (event, page) => {
    const from = (page - 1) * numCurdesInPage.size;
    const to = from + numCurdesInPage.size;

    setnumCurdesInPage({
      ...numCurdesInPage,
      from,
      to,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <HeaderRevue
        hedre="wishlist"
        icon={
          <FavoriteBorderOutlined
            sx={{
              color: theme.palette.myColor.colorBadge,
            }}
          />
        }
      />

      <Stack
        sx={{
          my: "20px",
        }}
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap="20px"
      >
        {cardsContentWishList
          .slice(numCurdesInPage.from, numCurdesInPage.to)
          .map((cart, index) => (
            <RecipeReviewCard
              cart={cart}
              increaseCartQuantity={increaseCartQuantity}
              key={index}
            />
          ))}
      </Stack>

      <Stack flexDirection="row" justifyContent="center">
        <Pagination
          onChange={handelPageCurdes}
          count={Math.ceil(cardsContentWishList.length / numCurdesInPage.size)}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </Box>
  );
}

export default WichLest;
