import { Box, Pagination, useTheme } from "@mui/material";
import SupportData from "./SupportData";
import { useState } from "react";
import HeaderRevue from "../HeaderRevue";
import { SupportAgentOutlined } from "@mui/icons-material";

const data = [
  {
    id: 1,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 2,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 3,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 4,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 5,
    qustion: "product Broken. i neeed refund",
    avatar: "normal",
    date: "Abr 15,2022",
    comment: "website problem",
  },
  {
    id: 6,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 7,
    qustion: "product Broken. i neeed refund",
    avatar: "normal",
    date: "Abr 15,2022",
    comment: "website problem",
  },
  {
    id: 8,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 9,
    qustion: "product Broken. i neeed refund",
    avatar: "normal",
    date: "Abr 15,2022",
    comment: "website problem",
  },
  {
    id: 10,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 11,
    qustion: "product Broken. i neeed refund",
    avatar: "normal",
    date: "Abr 15,2022",
    comment: "website problem",
  },
  {
    id: 12,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 13,
    qustion: "product Broken. i neeed refund",
    avatar: "normal",
    date: "Abr 15,2022",
    comment: "website problem",
  },
  {
    id: 14,
    qustion: "product Broken. i neeed refund",
    avatar: "normal",
    date: "Abr 15,2022",
    comment: "website problem",
  },
  {
    id: 15,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 17,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
  {
    id: 16,
    qustion: "product Broken. i neeed refund",
    avatar: "normal",
    date: "Abr 15,2022",
    comment: "website problem",
  },

  {
    id: 17,
    qustion: "product Broken. i neeed refund",
    avatar: "urgent",
    date: "Abr 13,2022",
    comment: "website problem",
  },
];

function SupportTickets() {
  const theme = useTheme();
  const [numCurdesInPage, setnumCurdesInPage] = useState({
    size: 9,
    from: 0,
    to: 9,
  });
  const handelPagination = (event, page) => {
    const from = (page - 1) * numCurdesInPage.size;
    const to = from + numCurdesInPage.size;

    setnumCurdesInPage({ ...numCurdesInPage, from, to });
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <HeaderRevue hedre="support tickets" icon={ <SupportAgentOutlined
                              sx={{
                                color: theme.palette.myColor.colorBadge,
                              }}
                            />}/>

      {data
        .slice(numCurdesInPage.from, numCurdesInPage.to)
        .map((ele, index) => (
          <SupportData key={index} card={ele} />
        ))}

      <Box
        sx={{
          mt: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          onChange={handelPagination}
          sx={{ textAlign: "center" }}
          count={Math.ceil(data.length / numCurdesInPage.size)}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  );
}

export default SupportTickets;
