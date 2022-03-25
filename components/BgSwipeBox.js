import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

const BgSwipeBox = ({ children, images }) => {
  const [img, setImg] = React.useState(images[0]);

  useEffect(() => {
    setInterval(() => {
      console.log('setInterval');
      setImg(
        (image) => images[images.findIndex((i) => i == image) + 1] || images[0]
      );
    }, 5000);
  }, []);

  return (
    <Box
      component={"section"}
      className="section"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: 'url("' + img + '")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <Container
        maxWidth={"sm"}
        sx={{
          marginRight: "auto !important",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "start" },
          textAlign: { xs: "center", md: "start" },
          mx: { xs: 2, sm: 5, md: 7 },
          overflow: "hidden",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default BgSwipeBox;
