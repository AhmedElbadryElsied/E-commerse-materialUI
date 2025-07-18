import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import {
  Chip,
  Divider,
  useTheme,
  Typography,
  Rating,
  Stack,
  Button,
  Box,
} from "@mui/material";
import {
  Add,
  AttachMoney,
  FavoriteBorder,
  Visibility,
} from "@mui/icons-material";

export default function RecipeReviewCard({ cart, increaseCartQuantity }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        
        position: "relative !important",
        minWidth: 340,
        "&:hover .heartHover": {
          opacity: 1,
        },
        boxShadow: "none",
      }}
    >
      <Chip
        size="small"
        sx={{
          top: "15px",
          left: "15px",
          position: "absolute",
          color: "#fff",
          bgcolor: theme.palette.myColor.colorBadge,
          px: "5px",
          zIndex: "1",
        }}
        label="10% off"
      />

      <CardActions
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
        }}
        disableSpacing
      >
        <IconButton
          size="small"
          sx={{
            opacity: "0",
            transition: "0.3s",
            zIndex: "100",
          }}
          className="heartHover"
          aria-label="add to favorites"
        >
          <FavoriteBorder fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            opacity: "0",
            transition: "0.3s",
            zIndex: "10",
          }}
          className="heartHover"
          aria-label="add to favorites"
        >
          <Visibility fontSize="small" />
        </IconButton>
      </CardActions>

      <CardMedia
        sx={{
          cursor: "pointer",
          transition: "0.5s",
          width: "100%",
          ":hover": {
            scale: "0.9",
          },
        }}
        component="img"
        height="300"
        image={cart.imgs[0]}
        alt="Paella dish"
      />
      <Divider />

      <CardContent>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "200",
            color: theme.palette.text.primary,
          }}
          variant="body1"
          component="h3"
        >
          {cart.title}
        </Typography>

        <Rating
          sx={{
            py: "10px",
          }}
          size="small"
          name="read-only"
          value={Number.parseInt(5)}
          readOnly
        />

        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: theme.palette.myColor.colorBadge,
                }}
                variant="body1"
                component="span"
              >
                <AttachMoney fontSize="small" />

                <Typography
                  sx={{
                    fontWeight: "700",
                  }}
                  variant="span"
                  component="span"
                >
                  {cart.price}
                </Typography>
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "capitalize",
                  fontSize: "15px",
                  fontWeight: "100",
                  color: theme.palette.text.disabled,
                }}
                variant="body1"
                component="span"
              >
                {cart.discount ? (
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Typography
                      sx={{
                        position: "absolute",
                        width: "60px",
                        height: "px",
                        top: "10px",
                        left: "2px",
                        background: theme.palette.text.disabled,
                      }}
                      variant="body1"
                    ></Typography>

                    <AttachMoney fontSize="inherit" />
                  </Box>
                ) : null}

                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                  variant="span"
                  component="span"
                >
                  {cart.discount}
                </Typography>
              </Typography>
            </Box>
          </Stack>

          <Button
            onClick={()=>increaseCartQuantity(cart.id)}
            sx={{
              p: "5px 5px !important",
              minWidth: "30px !important",
              borderRadius: "9px",
            }}
            variant="outlined"
            color="error"
          >
            <Add />
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
