import { Avatar, Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import profileImg from "../../../assets/img/profile/WhatsApp Image 2024-09-07 at 15.41.11_5b32e0ab.jpg";
import Grid from "@mui/material/Grid";
import HeaderRevue from "../HeaderRevue";
import { Person } from "@mui/icons-material";

function ProfileInfo() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <HeaderRevue
        hedre="My profile"
        icon={
          <Person
            sx={{
              color: theme.palette.myColor.colorBadge,
            }}
          />
        }
      />

      <Grid sx={{ my: "20px" }} container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              px: "15px",
              py: "20px",
              borderRadius: "10px",
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  flexGrow: "1",
                }}
              >
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    border: `3px solid ${theme.palette.grey[400]}`,
                    boxSizing: "content-box",
                  }}
                  alt="User imeage"
                  src={profileImg}
                >
                  {!profileImg ? "a".toUpperCase() : null}
                </Avatar>

                <Box>
                  <Typography
                    variant="body1"
                    component="h3"
                    sx={{
                      fontWeight: "500",
                      fontSize: "18px",
                    }}
                  >
                    Ahmed Elbadry
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: theme.palette.grey[500],
                    }}
                  >
                    Balance:
                    <Typography
                      variant="span"
                      component="span"
                      sx={{
                        color: theme.palette.myColor.colorBadge,
                        ml: "5px",
                      }}
                    >
                      $5,000.00
                    </Typography>
                  </Typography>
                </Box>
              </Stack>

              <Typography
                variant="p"
                component="p"
                sx={{
                  color: theme.palette.grey[500],
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontSize: "14px",
                }}
              >
                SILVER USER
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  display: "grid",
                  placeContent: "center",
                  textAlign: "center",
                  minHeight: "100px",
                  p: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    color: theme.palette.myColor.colorBadge,
                  }}
                >
                  16
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.grey[400],
                  }}
                >
                  All Orders
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  display: "grid",
                  placeContent: "center",
                  textAlign: "center",
                  minHeight: "100px",
                  p: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    color: theme.palette.myColor.colorBadge,
                  }}
                >
                  02
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.grey[400],
                  }}
                >
                  Awaiting Payments
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  display: "grid",
                  placeContent: "center",
                  textAlign: "center",
                  minHeight: "100px",
                  p: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    color: theme.palette.myColor.colorBadge,
                  }}
                >
                  00
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.grey[400],
                  }}
                >
                  Awaiting Shipment
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  display: "grid",
                  placeContent: "center",
                  textAlign: "center",
                  minHeight: "100px",
                  p: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    color: theme.palette.myColor.colorBadge,
                  }}
                >
                  01
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    color: theme.palette.grey[400],
                  }}
                >
                  Awaiting Delivery
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Paper
        sx={{
          py: "15px",
          px: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            my: "5px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.grey[500],
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            First Name
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            Nick
          </Typography>
        </Box>
        <Box
          sx={{
            my: "5px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.grey[500],
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            Last Name
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            DuBuque
          </Typography>
        </Box>
        <Box
          sx={{
            my: "5px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.grey[500],
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            Email
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            a9elbadry@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            my: "5px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.grey[500],
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            Phone
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            +10 278831096
          </Typography>
        </Box>
        <Box
          sx={{
            my: "5px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.grey[500],
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            Birth date
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            25 Apr, 1996
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default ProfileInfo;
