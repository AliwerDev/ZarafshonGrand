import { Box, Container, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import { Fade, Rotate, Slide } from "react-awesome-reveal";
import MainButton from "../../Components/Button";
import Section from "../../Components/Section";
import VideoMini from "../../Components/VideoMini";

export default function AboutSection() {
  return (
    <Section backImage="/Images/About.webp" id={"about"}>
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "static",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "flex-end" },
          height: "100% ",
          pb: { md: 5, xl: 6, xs: 2 },
        }}
      >
        <Box
          maxWidth={"sm"}
          sx={{
            textAlign: { xs: "center", md: "start" },
            overflow: "hidden",
            position: "static",
            padding: 0,
            margin: 0,
          }}
        >
          <Fade
            triggerOnce={false}
            direction={"up"}
            duration={500}
            damping
            cascade
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              О компании
            </Typography>
            <Typography paragraph>
              Узбекистан – это не только родина культуры, искусства и
              памятников, но и родина крупномасштабных промышленных созиданий. И
              одним из них является компания “Zarafshan Golden Group”, которая
              расположена в сердце промышленности Узбекистана, в городе Навои.
            </Typography>
            <Box
              sx={{
                py: 3,
                width: "100%",
                display: "flex",
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: "wrap",
              }}
            >
              <MainButton>
                <a href="#about">Подробнее о компании</a>
              </MainButton>
            </Box>
          </Fade>

          <Slide triggerOnce={false} style={{ width: "100%" }} delay={1600}>
            <Box
              sx={{
                display: "flex",
                width: "100% !important",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mt: 5,
              }}
            >
              <AboutNumber num={5} text={"регионов"} />
              <AboutNumber num={20} text={"проектов"} />
              <AboutNumber num={26} text={"года на рынке"} />
              <AboutNumber num={2.0} text={"тысяч сотрудников"} />
            </Box>
          </Slide>
        </Box>
      </Container>

      <Slide direction="right">
        <VideoMini />
      </Slide>
    </Section>
  );
}

export const AboutNumber = ({ num, text }) => {
  return (
    <Box
      display="flex"
      width="25%"
      flexDirection={"column"}
      alignItems="center"
    >
      <Box
        sx={{
          width: "80px",
          height: "80px",
          backgroundImage: "url('http://www.zarafshan-grand.com/img/zgg.svg')",
          display: "grid",
          placeItems: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography variant="h4" color={"#815a23"} component="h1">
          {num}
        </Typography>
      </Box>
      <Typography textAlign="center" mt={2} fontSize="14px">
        {text}
      </Typography>
    </Box>
  );
};
