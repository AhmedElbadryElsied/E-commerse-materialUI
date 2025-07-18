import {
  AccessAlarm,
  CreditScore,
  ElectricBolt,
  WorkspacePremium,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

// icon data for maping
const iconData = [
  {
    title: "Fast Delivery",
    subTitle: "start from $10",
    icon: <ElectricBolt />,
  },
  { title: "Money Guarantee", subTitle: "7 days Back", icon: <CreditScore /> },
  {
    title: "365 days",
    subTitle: "for free return",
    icon: <WorkspacePremium />,
  },
  { title: "payment", subTitle: "secure system", icon: <AccessAlarm /> },
];

function IconSection() {
  return (
    <Container
      sx={{
        bgcolor: "background.paper",
      }}
className="container"    >
      <Stack
        divider={
          useMediaQuery("(min-width:645px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          my: 3,
        }}
      >
        {iconData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              flexGrow: 1,
              // eslint-disable-next-line react-hooks/rules-of-hooks
              justifyContent: useMediaQuery('(min-width:600px)') ? "center" : "left",
              width: "250px",
              py: 1,
              px:"10px"
            }}
          >
            {item.icon}

            <Box>
              <Typography component="h6" variant="h6" sx={{ fontSize: "15px" }}>
                {item.title}
              </Typography>

              <Typography
                component="p"
                variant="p"
                sx={{ color: "text.secondary", fontSize: "14px" }}
              >
                {item.subTitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export default IconSection;
