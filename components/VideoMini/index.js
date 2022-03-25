import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import { Player } from "video-react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { width } from "@mui/system";

const VideoMini = () => {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const video = useRef(null);
  const setOpenContainer = () => {
    setOpen((v) => {
      if (v) {
        video.current?.actions.play();
      } else {
        // video.current?.actions.play();
      }
      return !v;
    });
  };
  const setPlayVideo = () => {};
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "120px",
          height: "120px",
          right: "40px",
          bottom: "40px",
          position: "absolute",
          border: "2px solid #E5E5E5",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          outline: "dashed 2px #E5E5E5",
          outlineOffset: "10px",
          borderRadius: "50%",
          "div.videos:hover ~ &": {
            transform: "rotate(40deg)",
          },
        }}
      />
      <Box
        className="click"
        sx={{
          width: open ? "3600px" : "120px",
          height: open ? "3600px" : "120px",
          borderRadius: open ? 0 : "50%",
          position: "absolute",
          right: open ? "-1200px" : "40px",
          bottom: open ? "-1200px" : "40px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all .7s ease-in-out",
          cursor: "pointer",
          zIndex: "9999",
          overflow: "hidden",
        }}
        onClick={setOpenContainer}
      >
        <PlayArrowIcon sx={{ fontSize: "4rem", position: "absolute" }} />
      </Box>
      <Box
        sx={{
          opacity: open ? 1 : 0,
          position: "fixed",
          bottom: 0,
          left: 0,
          transition: "all .7s ease-in-out",
          width: "100%",
          height: "100vh",
          zIndex: "9999999999",
        }}
      >
        <Player ref={video}>
          <source src="http://www.zarafshan-grand.com/video/1622807097.MP4" />
        </Player>
      </Box>
    </Box>
  );
};

export default VideoMini;
