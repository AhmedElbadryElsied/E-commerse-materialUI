import { ArrowForward } from "@mui/icons-material";
import {
  Avatar,
  Box,
  useTheme,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import React from "react";

function SupportData({ card }) {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          p: "15px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          mt: "20px",
        }}
      >
        <Box>
          <Typography variant="body1" component="p">
            {card.qustion}
          </Typography>
          <Stack 
          direction={"row"}
          alignItems={"center"}
          gap={1}
          mt={"15px"}
          flexWrap={"wrap"}
          >
            <Chip
              sx={{
                fontSize: "14px",
                fontWeight: "300",
                bgcolor:
                  card.avatar === "urgent"
                    ? theme.palette.myColor.colorBadge
                    : "#2196f3",
                color: "#fff",
                textTransform: "capitalize",
              }}
              label={card.avatar}
            />
            <Chip
              sx={{
                fontSize: "14px",
                fontWeight: "300",
                bgcolor: "#fafafa",
                color: "#64dd17",
                textTransform: "capitalize",
              }}
              label={"open"}
            />
            <Typography
              sx={{
                color: theme.palette.grey[400],
                fontSize: "14px",
                fontWeight: "100",
              }}
              variant="p"
              component="p"
            >
              {card.date}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.grey[400],
                fontSize: "14px",
                fontWeight: "100",
              }}
              variant="p"
              component="p"
            >
              {card.comment}
            </Typography>
          </Stack>
        </Box>

        <Avatar
          sx={{
            bgcolor: "transparent",
            ":hover": {
              bgcolor: theme.palette.grey[200],
              cursor: "pointer",
            },
          }}
          variant="rounded"
        >
          <ArrowForward
            sx={{
              color: theme.palette.grey[500],
            }}
          />
        </Avatar>
      </Box>
    </Box>
  );
}

export default SupportData;
