import { Box, Container, Link, Typography } from "@mui/material";
import Slider from "./Slider";
import img1 from "../../assets/img/banner-16.jpg";
import img2 from "../../assets/img/banner-17.jpg";
import { ArrowForward } from "@mui/icons-material";
import IconSection from "./IconSection";

function Hero() {
  return (
    <Container
      sx={{
        px: { xs: "0", md: "16px" },
      }}
      className="container"
    >
      <Box
        sx={{
          mt: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
          pt: 3,
        }}
      >
        <Slider />

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.4%" } }}>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img style={{ width: "100%" }} src={img1} alt="...." />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-55%,-60%)",
                width: "80%",
              }}
            >
              <Typography
                component="p"
                color="#616161"
                sx={{
                  fontSize: { xs: "15px", lg: "19px" },
                  fontWeight: "600",
                }}
              >
                NEW ARRIVALS
              </Typography>

              <Typography
                component="h4"
                color="#424242"
                sx={{
                  fontSize: { xs: "25px", lg: "30px" },
                  fontWeight: "bold",
                  lineHeight: "1.1",
                  my: "10px",
                }}
              >
                SUMMER SALE 20% OFF
              </Typography>

              <Link
                href="#"
                sx={{
                  color: "#546e7a",
                  textDecoration: "underline",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  width: { xs: "50%", lg: "40%" },
                  fontSize: "15px",
                  ":hover": { color: "#64ffda" },
                }}
              >
                Shop now
                <ArrowForward fontSize="14px" />
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
            }}
          >
            <img style={{ width: "100%" }} src={img2} alt="...." />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-55%,-60%)",
                width: "80%",
              }}
            >
              <Typography
                component="p"
                color="#616161"
                sx={{
                  fontSize: { xs: "15px", lg: "19px" },
                  fontWeight: "600",
                }}
              >
                NEW ARRIVALS
              </Typography>

              <Typography
                component="h4"
                color="#424242"
                sx={{
                  fontSize: { xs: "25px", lg: "30px" },
                  fontWeight: "bold",
                  lineHeight: "1.1",
                  my: "10px",
                }}
              >
                SUMMER SALE 20% OFF
              </Typography>

              <Link
                href="#"
                sx={{
                  color: "#546e7a",
                  textDecoration: "underline",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  width: { xs: "50%", lg: "40%" },
                  fontSize: "15px",
                  ":hover": { color: "#64ffda" },
                }}
              >
                Shop now
                <ArrowForward fontSize="14px" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
}

export default Hero;
