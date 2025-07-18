import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Box, useTheme } from "@mui/material";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import Slidercard from "./Slidercard";

import { sliderProduct } from "../../../db";

function Slider({ breakpoints }) {

  const theme = useTheme();

  const navigationButtonStyle = {
    position: "absolute",
    top: "50%",
    zIndex: 10,
    transform: "translateY(-50%)",
    backgroundColor: theme.palette.myColor.buttonSideBar,
    color: "white",
    width: "35px",
    height: "35px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity 0.3s ease",
  };

  return (
    <Box
      className="slider-wrapper"
      sx={{
        position: "relative",
        py: "20px",
        width:"99%"
      }}
    >
      <Box sx={navigationButtonStyle} className="custom-button-prev">
        <KeyboardDoubleArrowLeft fontSize="large" />
      </Box>
      <Box sx={navigationButtonStyle} className="custom-button-next">
        <KeyboardDoubleArrowRight fontSize="large" />
      </Box>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-button-next",
          prevEl: ".custom-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: breakpoints[0],
          },
          600: {
            slidesPerView: breakpoints[1],
          },
          1000: {
            slidesPerView: breakpoints[2],
          },
          1100: {
            slidesPerView: breakpoints[3],
          },
        }}
        spaceBetween={30}
        loop={true}
        className="mySwiper"
      >
        {sliderProduct.map((slide, i) => (
          <SwiperSlide key={i}>
            <Slidercard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;
