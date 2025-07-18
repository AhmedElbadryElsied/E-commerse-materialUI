/* eslint-disable react-hooks/rules-of-hooks */
import {
  FacebookOutlined,
  Google,
  Instagram,
  LocalGroceryStoreOutlined,
  X,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useTheme,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

import googleIcon from "../../assets/img/icons8-google-play-store-48.png";
import appStoreIcon from "../../assets/img/icons8-app-store-48.png";

function footer() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#283445",
          pt: "60px",
          pb: "30px",
          px: "18px",
          color: theme.palette.grey[400],
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={3} item>
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              <Stack
                sx={{
                  pt: "20px",
                  my: "20px",
                }}
                justifyContent={"start"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <LocalGroceryStoreOutlined />

                <Typography variant="p" component={"p"}>
                  E-commerce
                </Typography>
              </Stack>
            </Link>

            <Typography
              sx={{
                fontSize: "13px",
                color: theme.palette.grey[400],
                lineHeight: "1.9",
              }}
              variant="p"
              component={"p"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Typography>

            <Stack
              sx={{
                color: "#fff",
                my: "20px",
                alignItems: "center",
                flexDirection: "row",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  bgcolor: "#222d3cff",
                  px: "15px",
                  py: "10px",
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{
                    width: "30px",
                  }}
                  src={googleIcon}
                  alt="Google play icon"
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: "9px",
                    }}
                    variant="body1"
                  >
                    Get it on
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                    }}
                    variant="body1"
                  >
                    Google Play
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  bgcolor: "#222d3cff",
                  px: "15px",
                  py: "10px",
                  borderRadius: "10px",
                }}
              >
                <img
                  style={{
                    width: "30px",
                  }}
                  src={appStoreIcon}
                  alt="Google play icon"
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: "9px",
                    }}
                    variant="body1"
                  >
                    Dowenload on the
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                    }}
                    variant="body1"
                  >
                    App Store
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid xs={12} sm={6} md={3} item>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#fff",
              }}
              variant="body1"
            >
              About Us
            </Typography>

            <List
              sx={{
                width: "100%",
              }}
            >
              {[
                "careers",
                "our stores",
                "our cares",
                "terms & conditions",
                "privacy policy",
              ].map((value) => (
                <ListItem
                  key={value}
                  disableGutters
                  sx={{
                    cursor: "pointer",
                    "& .MuiListItemText-primary": {
                      fontSize: "14px",
                    },
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  <ListItemText
                    sx={{ textTransform: "capitalize" }}
                    primary={value}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid xs={12} sm={6} md={3} item>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#fff",
              }}
              variant="body1"
            >
              Customer Care
            </Typography>

            <List
              sx={{
                width: "100%",
                fontSize: "10px",
              }}
            >
              {[
                "help center",
                "track your order",
                "corporate & bulk purchasing",
                "returns & refunds",
              ].map((value) => (
                <ListItem
                  key={value}
                  disableGutters
                  sx={{
                    cursor: "pointer",

                    "& .MuiListItemText-primary": {
                      fontSize: "14px",
                    },
                    "&:hover": {
                      color: "#fff",
                    },
                  }}
                >
                  <ListItemText
                    sx={{ textTransform: "capitalize" }}
                    primary={value}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid xs={12} sm={6} md={3} item>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#fff",
              }}
              variant="body1"
            >
              Contact Us
            </Typography>

            <List
              sx={{
                width: "100%",
              }}
            >
              {[
                "70 Washington Square South, New York, NY 10012, United States",
                "Email: uilib.help@gmail.com",
                "Phone: +1 1123 456 780",
              ].map((value) => (
                <ListItem
                  key={value}
                  disableGutters
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "14px",
                    },
                  }}
                >
                  <ListItemText primary={value} />
                </ListItem>
              ))}
            </List>

            <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
              <IconButton
                sx={{
                  borderRadius: "10px",
                  color: "#fff",
                  bgcolor: "#222d3cff",
                  "&:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <X sx={{ fontSize: "15px" }} />
              </IconButton>

              <IconButton
                sx={{
                  borderRadius: "10px",
                  color: "#fff",
                  bgcolor: "#222d3cff",
                  "&:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <FacebookOutlined sx={{ fontSize: "15px" }} />
              </IconButton>

              <IconButton
                sx={{
                  borderRadius: "10px",
                  color: "#fff",
                  bgcolor: "#222d3cff",
                  "&:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <Instagram sx={{ fontSize: "15px" }} />
              </IconButton>

              <IconButton
                sx={{
                  borderRadius: "10px",
                  color: "#fff",
                  bgcolor: "#222d3cff",
                  "&:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <YouTube sx={{ fontSize: "15px" }} />
              </IconButton>

              <IconButton
                sx={{
                  borderRadius: "10px",
                  color: "#fff",
                  bgcolor: "#222d3cff",
                  "&:hover": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <Google sx={{ fontSize: "15px" }} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap:"wrap",
          bgcolor: "#272d35ff",
          py: "5px",
          width: "100%",
          mb: matches ? "70px" : "0",
          color: "#fff",
          gap: "5px",
        }}
      >
        <Typography variant="body1">copyright &copy;</Typography>
        <Typography variant="body1">2024 All rights reserved |</Typography>

        <Link
          to={"https://www.facebook.com/ahmed.elbadry.68831/?locale=ar_AR"}
          style={{
            color: "#709cd8ff",
          }}
        >
          <Typography
            sx={{
              "&:hover": {
                color: "#6380c2ff",
              },
            }}
            variant="body1"
          >
            Made by Ahmed Elbadry
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default footer;
