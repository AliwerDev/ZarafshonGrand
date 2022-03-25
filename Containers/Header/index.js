import {
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import ToChangeLang from "../../Components/BtnToChangeLang";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import MenuLink from "../../Components/MenuLink";
import CallIcon from "@mui/icons-material/Call";
import { useSpring, animated, config } from "react-spring";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const logoAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  25% {
    transform: rotateY(180deg);
  }
  50% {
    transform: rotateY(0);
  }
`;

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        py: 3,
        top: 0,
        background: "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 200,
        background:
          "linear-gradient(180deg, #F8F4E8 24.82%, rgba(248, 244, 232, 0.78) 60.73%, rgba(248, 244, 232, 0.53) 83.06%, rgba(255, 255, 255, 0.0) 99.87%)",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", alignItems: "start" }}>
          <Reveal damping duration={4000} keyframes={logoAnimation}>
            <Image
              src="/images/logo.svg"
              alt="Picture of the author"
              width={120}
              height={120}
            />
          </Reveal>
          <Box
            sx={{ flex: 1, pl: 4, display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <ToChangeLang text="Русский" active={true} />
                <ToChangeLang text="O'zbekcha" />
                <ToChangeLang text="English" />
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Link
                  sx={{
                    color: "#4E4E4E",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { color: "#aa8876" },
                    textTransform: "capitalize",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BusinessCenterIcon sx={{ mr: 1, color: "#aa8876" }} /> О
                  компании
                </Link>

                <Link
                  sx={{
                    color: "#4E4E4E",
                    cursor: "pointer",
                    transition: "0.2s",
                    "&:hover": { color: "#aa8876" },
                    textTransform: "capitalize",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PermContactCalendarIcon sx={{ mr: 1, color: "#aa8876" }} />{" "}
                  Контакты
                </Link>
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  listStyleType: "none",
                  pl: 0,
                }}
              >
                <MenuLink text="Строительство" />
                <MenuLink text="Производство" />
                <MenuLink text="Текстиль" />
                <MenuLink text="Теплица" />
                <MenuLink text="Хорека" />
                <MenuLink text="Новости" />
                <MenuLink text="Галерея" />
                <MenuLink text="Каталог" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <animated.div>
                  <IconButton
                    onClick={() => alert("qweerty")}
                    sx={{
                      backgroundColor: "#aa8876",
                      color: "#fff",
                      p: 2,
                      "&:hover": { backgroundColor: "#aa8876 !important" },
                    }}
                  >
                    <CallIcon />
                  </IconButton>
                </animated.div>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    ml: 2,
                    color: "#fff",
                    textShadow: "#000 1px 0 10px",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    78 770-20-20{" "}
                  </Typography>
                  <Typography>Тех. поддержка</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
