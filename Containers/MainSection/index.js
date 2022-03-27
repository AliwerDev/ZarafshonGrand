import { Box, Container, Typography } from "@mui/material";
import MainButton from "../../Components/Button";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import Section from "../../Components/Section";

const imagesData = [
  "/Images/Main.webp",
  "/Images/About.webp",
  "/Images/News.webp",
  "/Images/Projects.webp",
];

export default function MainSection() {
  return (
    <Section images={imagesData} id="home">
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
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Zarafshan Golden Group
            </Typography>
            <Typography paragraph>
              Cтроительство, гостиница, ресторан, переработка каменных
              минералов, текстиль, изготовление мебели, пластика,
              металлоконструкций, а также железобетонный и кирпичный завод.
            </Typography>
            <Box
              sx={{
                py: 5,
                width: "100%",
                display: "flex",
                gap: 2,
                alignItems: "start",
                justifyContent: { xs: "center", md: "start" },
                flexWrap: "wrap",
              }}
            >
              <MainButton>
                <a href="#about">Наши услуги</a>
              </MainButton>
              <MainButton second={true}>О компании</MainButton>
            </Box>
          </Fade>
          <Slide triggerOnce={false} delay={1600}>
            <Box display="flex" mt={5} alignItems={"center"}>
              <Icon text="Гарантия качества" img="/icons/guarantee.svg" />
              <Icon text="Работают профессионалы" img="/icons/suitcase.svg" />
              <Icon text="Добросовестная работа" img="/icons/settings.svg" />
            </Box>
          </Slide>
        </Box>
      </Container>
    </Section>
  );
}

const Icon = ({ text, img }) => {
  return (
    <Box width={"33.33%"} display={"flex"} alignItems="center">
      <Image src={img} alt="g" width="30" height="30" />
      <Typography fontSize={12} ml={1}>
        {text}
      </Typography>
    </Box>
  );
};
