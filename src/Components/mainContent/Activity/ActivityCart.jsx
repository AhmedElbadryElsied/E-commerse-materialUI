import { Box, Typography } from "@mui/material";
import { East } from "@mui/icons-material";

function ActivityCart({ text, img, color ,textColor}) {

  return (
    <Box
      sx={{
        position: "relative",
        width:"100%",
        height:{xs:"150px" , sm:"250px" , md:""},
        color:textColor,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: {xs:"10px" , sm:"80px" , md:"85px" , lg:"23px"},
          left: "20px",
          
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            textTransform: "uppercase",
            wordSpacing: "4px",
          }}
          variant="body1"
        >
          {text[0]}
        </Typography>
        <Box
          sx={{
            my: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "23px",
              textTransform:"capitalize"
            }}
            variant="body1"
          >
            {text[1]}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: color,
              textTransform:"capitalize"
            }}
            variant="body1"
          >
            {text[2]}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            position: "relative",
            cursor: "pointer",

            "&::after": {
              content: '""',
              position: "absolute",
              top: "100%",
              left: "0",
              bgcolor: textColor,
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
      </Box>

      <img
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
        }}
        src={img}
        alt="ImageActivity"
      />
    </Box>
  );
}

export default ActivityCart;
