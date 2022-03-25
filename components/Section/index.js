import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";

export default function Section({ backImage, children, images, ...props }) {
  const [img, setImg] = React.useState(images ? images[0] : backImage);

  if (false) {
    useEffect(() => {
      setInterval(() => {
        setImg(
          (image) =>
            images[images.findIndex((i) => i == image) + 1] || images[0]
        );
      }, 5000);
    }, []);
  }
  return (
    <Box
      {...props}
      component="section"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: 'url("' + img + '")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "all 1s ease-in-out",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
      className="section"
    >
      {children}
    </Box>
  );
}
