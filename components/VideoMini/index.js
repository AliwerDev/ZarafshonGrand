import { Box } from "@mui/material";
import React, { useState } from "react";

const VideoMini = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <Box
      sx={{
        width: openVideo ? "3600px" : "120px",
        height: openVideo ? "3600px" : "120px",
        borderRadius: openVideo ? 0 : "50%",
        position: "absolute",
        right: openVideo ? "-1000px" : "40px",
        bottom: openVideo ? "-1000px" : 0,
        background: "white",
        border: "2px solid #E5E5E5",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        outline: "dashed 2px #E5E5E5",
        outlineOffset: "10px",
        transition: "all .7s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "rotate(40deg)",
        },
      }}
      onClick={() => setOpenVideo((v) => !v)}
    >
      <Box></Box>
    </Box>
  );
};

export default VideoMini;
