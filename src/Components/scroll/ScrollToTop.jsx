import { KeyboardArrowUp } from "@mui/icons-material";
import { SpeedDial, useScrollTrigger, Zoom } from "@mui/material";

function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 500 })}>
      <SpeedDial
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "fixed",
          bottom: "4.5rem",
          right: 16,
          ".MuiButtonBase-root": {
            borderRadius: "10px",
            width: "45px",
            height: "45px",
            bgcolor: "#202b38ff",
            boxShadow: "5px 5px 10px #18202cff ",
            "&:hover": {
              bgcolor: "#3b4554ff",
            },
            ".MuiSvgIcon-root": {
              color: "#fff",
            },
          },
        }}
        icon={<KeyboardArrowUp color="#fff" fontSize="small" />}
      ></SpeedDial>
    </Zoom>
  );
}

export default ScrollToTop;
