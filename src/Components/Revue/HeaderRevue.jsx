import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerRevueContext } from "../../context/DrawerRevueContext";
import { Menu } from "@mui/icons-material";

function HeaderRevue({ hedre, icon }) {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1280px)");
  const { toggleDrawer } = useDrawerRevueContext();
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between !important",
          alignItems: "center",
          mb: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexGrow: "1",
          }}
        >
          <Avatar
            sx={{
              bgcolor: theme.palette.grey[200],
            }}
            variant="rounded"
          >
            {icon}
          </Avatar>

          <Typography
            sx={{
              textTransform: "capitalize",
              fontWeight: "700",
            }}
            variant="h5"
            component="h2"
          >
            {hedre}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap:
              window.location.pathname === "/review/profile-info"
                ? "15px"
                : "0px",
          }}
        >
          <IconButton
            onClick={toggleDrawer("left", true)}
            size="small"
            sx={{
              display: matches ? "none" : "flex",
            }}
          >
            <Menu
              sx={{
                color: theme.palette.grey[500],
              }}
            />
          </IconButton>

          {/* Profile Button Editing */}
          {window.location.pathname === "/review/profile-info" ? (
            <Button
              sx={{
                color: theme.palette.myColor.colorBadge,
                borderColor: theme.palette.myColor.colorBadge,
              }}
              variant="outlined"
            >
              Edit profile
            </Button>
          ) : null}
        </Box>
      </Stack>
    </Box>
  );
}

export default HeaderRevue;
