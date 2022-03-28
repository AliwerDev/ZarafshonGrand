import { Box, Container, Typography } from "@mui/material";
import MainButton from "../../Components/Button";
import { Fade, Slide } from "react-awesome-reveal";
import Section from "../../Components/Section";
import CommandCarousel from "../../components/Carousels/CommandCarousel";
import NewsCarousel from "../../components/Carousels/NewsCarousel";

export default function News() {
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
                sx={{ fontWeight: "bold", mb: 3 }}
              >
                Новости
              </Typography>

              <MainButton>
                <a href="#about">Все наши новости</a>
              </MainButton>
            </Fade>
          </Box>
        </Container>
        <Box sx={{}}>
          <Slide direction="right" delay={1600}>
            <NewsCarousel />
          </Slide>
        </Box>
      </Box>
    </Section>
  );
}
