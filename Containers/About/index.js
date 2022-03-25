import { Box, Container, Slider, Typography } from "@mui/material";
import { Fade, Slide } from "react-awesome-reveal";
import MainButton, { SecondButton } from "../../Components/Button";
import Section from "../../Components/Section";

export default function AboutSection() {
  return (
    <Section backImage="/Images/About.webp" id={"about"}>
      <Fade triggerOnce={false} direction={"up"} duration={500} damping cascade>
        <Typography
          variant="h5"
          component="h1"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          О компании
        </Typography>
        <Typography paragraph>
          Узбекистан – это не только родина культуры, искусства и памятников, но
          и родина крупномасштабных промышленных созиданий. И одним из них
          является компания “Zarafshan Golden Group”, которая расположена в
          сердце промышленности Узбекистана, в городе Навои.
        </Typography>
        <Box
          sx={{
            py: 5,
            width: "100%",
            display: "flex",
            gap: 2,
            justifyContent: "start",
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
    </Section>
  );
}

import React from "react";

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
