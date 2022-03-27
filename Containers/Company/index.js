import { Box, Container, Typography } from "@mui/material";
import MainButton from "../../Components/Button";
import { Fade, Slide } from "react-awesome-reveal";
import Section from "../../Components/Section";
import CommandCarousel from "../../components/Carousels/CommandCarousel";

export default function Company() {
  return (
    <Section backImage="/Images/company.webp" id="company">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
          maxWidth={"xl"}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "static",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "flex-end" },
            flex: 1,
            pb: 2,
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
                Руководство компании
              </Typography>
              <Typography paragraph>
                Узбекистан – это не только родина культуры, искусства и
                памятников, но и родина крупномасштабных промышленных созиданий.
                И одним из них является компания “Zarafshan Golden Group”,
                которая расположена в сердце промышленности Узбекистана, в
                городе Навои.
              </Typography>
              <Box
                sx={{
                  pt: 5,
                  width: "100%",
                  display: "flex",
                  gap: 2,
                  alignItems: "start",
                  justifyContent: { xs: "center", md: "start" },
                  flexWrap: "wrap",
                }}
              >
                <MainButton>
                  <a href="#about">Наша команда</a>
                </MainButton>
              </Box>
            </Fade>
          </Box>
        </Container>
        <Box display={"flex"} justifyContent="flex-end">
          <Container maxWidth="md" sx={{ m: 0, padding: "0 !important" }}>
            <Slide direction="right" delay={1600}>
              <CommandCarousel />
            </Slide>
          </Container>
        </Box>
      </Box>
    </Section>
  );
}
