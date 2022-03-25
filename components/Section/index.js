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
        transition: "background-image 1s ease-in-out",
        backgroundRepeat: "no-repeat",
      }}
      className="section"
    >
      <Container
        maxWidth={"sm"}
        sx={{
          marginRight: "auto !important",
          height: "100%",
          display: "flex",
          marginTop: 12,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "start" },
          textAlign: { xs: "center", md: "start" },
          mx: { xs: 2, sm: 5, md: 5 },
          overflow: "hidden",
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
