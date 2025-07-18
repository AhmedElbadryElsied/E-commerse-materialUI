import { Box, useTheme } from "@mui/material";
import Marquee from "react-fast-marquee";
import image1 from "../../assets/img/markat/alibaba.webp";
import image2 from "../../assets/img/markat/levis.webp";
import image3 from "../../assets/img/markat/lotto.webp";
import image4 from "../../assets/img/markat/raymond.webp";
import image5 from "../../assets/img/markat/samsung.webp";

function Brandes() {


    const theme = useTheme();



  return (
    <Box
    
    sx={{
        bgcolor:theme.palette.grey[300],
        py:"20px",
        mt:"20px"
    }}
    >

        
      <Marquee 
      
   
      
      speed={50}>
      

      <img style={{paddingRight:"60px" , width:"200px" }} src={image1} alt="Alibaba Brand" />
      <img style={{paddingRight:"60px" , width:"200px" }} src={image2} alt="levals Brand" />
      <img style={{paddingRight:"60px" , width:"200px" }} src={image3} alt="Lotto Brand" />
      <img style={{paddingRight:"60px" , width:"200px" }} src={image4} alt="Raymond Brand" />
      <img style={{paddingRight:"60px" , width:"200px" }} src={image5} alt="Samsung Brand" />


      </Marquee>
       
    </Box>
  );
}

export default Brandes;
