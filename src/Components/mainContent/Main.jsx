import {
  Box,
  Container,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import "./main.css";
import Cardes from "./Cardes";

import { cardsContent } from "../../db";
import Slider from "./Slider/Slider";
import { East } from "@mui/icons-material";
import ActivityCart from "./Activity/ActivityCart";
import image1 from "../../assets/img/Activity img/banner-18.webp";
import image2 from "../../assets/img/Activity img/banner-19.webp";
import image3 from "../../assets/img/Activity img/banner-20.webp";
import SidePar from "./SidePar";
import Brandes from "./Brandes";

function Main() {
  // data mapping for toggle button

  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();

  const handelCardsShows = (value) => {
    setcategory(value);
  };

  const buttonData = [
    { Title: "All products", value: "left", category: "all" },
    { Title: "Men category", value: "center", category: "men" },
    { Title: "Wommen category", value: "right", category: "women" },
  ];

  const [category, setcategory] = useState("all");

  // filter cards

  const filterData = cardsContent.filter((ele) => {
    return ele.category === category;
  });

  return (
    <Container
      sx={{
        mt: 9,
      }}
      className="container"
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <Box>
          <Typography variant="h6" component="h6">
            Selected products
          </Typography>
          <Typography variant="body1" component="p">
            All our nem arrivals in a exclusive brand selection
          </Typography>
        </Box>


        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={(e, value) => handleAlignment(value)}
          aria-label="text alignment"
          sx={{
            gap: 2,
          }}
        >
          {buttonData.map((item) => (
            <ToggleButton
            key={item.value}
              onClick={() => handelCardsShows(item.category)}
              sx={{
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value={item.value}
              aria-label="left aligned"
            >
              {item.Title}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>



      </Stack>
      <Grid
        container
        spacing={2}

        mb={"70px"}
        
        
      >
        {category === "all"
          ? cardsContent.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Cardes  item={item} />
              </Grid>
            ))
          : filterData.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <Cardes  item={item} />
              </Grid>
            ))}
      </Grid>

      <Box
        sx={{
          my: "20px",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
            }}
            variant="h6"
            component="h3"
          >
            Deals Of The Day
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              position: "relative",
              cursor: "pointer",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "100%",
                left: "0",
                bgcolor: theme.palette.text.primary,
                width: "0",
                height: "2px",
                mx: "2px",
                transition: "0.3s",
              },
              "&:hover::after": {
                width: "95%",
              },
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: "14px",
              }}
              variant="body1"
            >
              more products
            </Typography>
            <East fontSize="14px" />
          </Box>
        </Stack>

        <Slider breakpoints={[2, 3, 4, 5]} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          gap: "20px",
          my: "50px",
        }}
      >
        <ActivityCart
          text={["NEW ARRIVALS", "SKI CLOTHES SALE", "Up to 35% Off"]}
          img={image1}
          color={theme.palette.myColor.colorBadge}
          textColor="#000"
        />
        <ActivityCart
          text={["BEST SELLER", "TRENDING WOMEN", "SUNGLASSES"]}
          img={image2}
          color={"#fff"}
          textColor="#fff"
        />
        <ActivityCart
          text={["NEW ARRIVALS", "NEW LATEST BAG", "COLLECTION"]}
          img={image3}
          color={"#000"}
          textColor="#000"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <SidePar header={"Electronic"} />

        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
          }}
        >
          <Slider breakpoints={[2, 3, 3, 4]} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          gap: "20px",
          my: "50px",
        }}
      >
        <ActivityCart
          text={["Final Reduction", "Sale up to 20% Off", "Only From $270.00"]}
          img={image1}
          color={theme.palette.myColor.colorBadge}
          textColor="#000"
        />
        <ActivityCart
          text={["Weekend Sale", "Fine Smart Speaker", "Starting at $185.00"]}
          img={image2}
          color={"#fff"}
          textColor="#fff"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <SidePar header={"Men's Fashion"} />

        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
          }}
        >
          <Slider breakpoints={[2, 3, 3, 4]} />
        </Box>
      </Box>

      <Box
        sx={{
          my: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            textTransform: "capitalize",
            fontWeight: "600",
          }}
          variant="body1"
          component={"h3"}
        >
          featured brands
        </Typography>

        <Brandes />
      </Box>



      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "20px",
          pb:"20px"
        }}
      >
        <SidePar header={"Women's Fashion"} />

        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
          }}
        >
          <Slider breakpoints={[2, 3, 3, 4]} />
        </Box>
      </Box>


    </Container>
  );
}

export default Main;
