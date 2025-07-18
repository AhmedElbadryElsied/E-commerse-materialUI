import { East } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

const listText = [
  "wireless speaker",
  "tablet",
  "smartphone",
  "laptop",
  "imac",
  "game controller",
  "drone",
  "apple",
];

function SidePar({ header }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        py:"20px",
        px:"20px",
        width:"100%",
        borderRadius:"10px"
      }}
    >
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "600",
          textTransform: "capitalize",
        }}
        variant="body1"
        component={"h3"}
      >
        {header}
      </Typography>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {listText.map((value) => (
          <ListItem
            sx={{
              cursor: "pointer",
              py: "2px",
            }}
            key={value}
            disableGutters
          >
            <ListItemText primary={value} />
          </ListItem>
        ))}
      </List>

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
    </Box>
  );
}

export default SidePar;
