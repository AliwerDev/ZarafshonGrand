import { Box, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import { Player } from "video-react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Fade } from "react-awesome-reveal";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
const VideoMini = () => {
  const [open, setOpen] = useState(false);
  const video = useRef(null);
  console.log(video);
  const startVideo = () => {
    setOpen((v) => {
      if (v) {
        video.current?.actions.pause();
      } else {
        video.current?.actions.play();
      }
      return !v;
    });
  };
  return (
    <Box
      sx={{
        position: "relative",
        marginTop: "-.5px",
        display: { xs: "none", lg: "block" },
      }}
    >
      <Box
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

          "&:hover + .click": {
            transform: "rotate(90deg)",
          },
        }}
        onClick={startVideo}
      >
        <PlayArrowIcon sx={{ fontSize: "4rem", position: "absolute" }} />
      </Box>
      <Box
        className="click"
        sx={{
          transition: "all 1s ease-in-out",
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
        }}
      />
      <Box
        sx={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "collapse",
          position: "fixed",
          bottom: 0,
          left: 0,
          transition: "all .7s ease-in-out",
          width: "100%",
          zIndex: "9999999999",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "300px",
            width: "50px",
            right: "40px",
            cursor: "pointer",
            zIndex: "99999999",
            transform: "rotate(180deg)",
          }}
          onClick={() => startVideo()}
        >
          <img
            style={{ width: "100%" }}
            src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-1/254000/43-512.png"
          />
        </Box>
        <Player ref={video}>
          <source src="http://www.zarafshan-grand.com/video/1622807097.MP4" />
        </Player>
      </Box>
    </Box>
  );
};

export default VideoMini;
