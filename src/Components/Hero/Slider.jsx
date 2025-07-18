import { Box, Button, Typography, useTheme } from '@mui/material'
import React from 'react'
// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./slider.css";       


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import img1 from "../../assets/img/banner-15.jpg";
import img2 from "../../assets/img/banner-25.jpg";

// slider content maping

const sliderContent=[
    {type:"MEN",img:img1},
    {type:"WOMEN",img:img2}
]

function Slider() {

    const theme =useTheme()

  return (
    // <Box className="border" >
        <Swiper
        sx={{flexGrow:1}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >

        {sliderContent.map((item,index)=>(

            <SwiperSlide

            key={index}

            className='parentSlider'
            
            sx={{
                position:"relative",
            }}
            
            >
                <img src={item.img} alt="...." />
    
            <Box
            
            sx={{
                
        [theme.breakpoints.up('sm')]: {
            position:"absolute",
                color:"#000",
                top:"100px",
                left:"90px",
                width:"400px",
                textAlign:"left",
        },
        [theme.breakpoints.down('sm')]: {
           pt:4,
           pb:6,
           width:"200px",
            },
            }}
           
            //
            >
    
                <Typography
                component="p"
    
                sx={{
                    fontSize:{xs:"16px",sm:"20px"},
                    fontWeight:"600",
                    color:"#616161",
                }}
                >
                    LIFESTYLE COLLECTION
                </Typography>
    
    
    
                <Typography
                component="h2"
                variant="h3"
    
                sx={{
                    fontSize:{xs:"25px",sm:"35px"},
                    color:"#424242",
                    my:"10px"
                }}
                >
                   {item.type} 
                </Typography>
    
    
                <Typography
                component="h2"
                variant="h5"
                sx={{
                    color:"#424242",
                    fontWeight:"500",
                    fontSize:{xs:"20px",sm:"30px"},
                }}
                >
                SELE UP TO  <Typography component="span" variant="h5" sx={{color:"red",fontSize:"30px",}}>30% OFF</Typography> 
                </Typography>
    
    
    
                <Typography
                component="p"
                variant="p"
                sx={{
                    color:"#424242",
                    fontSize:{xs:"14px",sm:"16px"},
                    letterSpacing:"1px",
                    my:"10px"
                }}
                >
                   Get free shipping on orders over $99.00 
                </Typography>
    
    
    
                <Button 
                sx={{
                    bgcolor:"#000",
                    color:"#fff",
                    border:"1px solid #000",
                    px:"30px",
                    ":hover":{
                        bgcolor:"transparent",
                        color:"#000",
                    }
                
                    }} >shop Now</Button>
    
    
    
    
            </Box>
    
            </SwiperSlide>

            
        ))}

        
        
       
        
      </Swiper>
    // </Box>
  )
}

export default Slider