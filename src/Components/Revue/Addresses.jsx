import {
  Box,
  Paper,
  useTheme,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import HeaderRevue from "./HeaderRevue";
import { Create, Delete, PlaceOutlined } from "@mui/icons-material";

const addressesData = [
  {location:"office" , addres:"8327 dskdfh lidfh lsdkjf, ief ksdj" , phone:"023487667"},
  {location:"Shop" , addres:"8327 dskdfh lidfh lsdkjf" , phone:"3498659238"},
  {location:"garage" , addres:"8327 dskdfh lidfh lahf jkhdf" , phone:"4983573"},
  {location:"Coffee House" , addres:"8327 dskdfh lidfh lsdkjf, ief ksdjfh dkuhf dlahf jkhdf" , phone:"28597623876"},
  {location:"italian restaurant" , addres:"8327 dskdfh dkuhf dlahf jkhdf" , phone:"928652748487"},
]
function Addresses() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <HeaderRevue
        hedre="addresses"
        icon={
          <PlaceOutlined
            sx={{
              color: theme.palette.myColor.colorBadge,
            }}
          />
        }
      />
      <Box
        sx={{
          my: "20px",
        }}
      >

        {addressesData.map((addres , index)=>(
        

        <Paper
        key={index}
          sx={{
            px: "20px",
            py: "17px",
            my: "20px",
          }}
        >
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={6} sm={3}>
              <Typography
                variant="body1"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {addres.location}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "200px",
                  textTransform: "capitalize",
                }}
              >
                {addres.addres}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography 
              variant="body1"
              >
                {addres.phone}
                </Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: { xs: "start", sm: "end" },
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    borderRadius: "13px",
                  }}
                >
                  <Delete fontSize="small" />
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: "13px",
                  }}
                >
                  <Create fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Addresses;
