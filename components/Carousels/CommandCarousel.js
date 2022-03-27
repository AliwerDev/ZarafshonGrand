import { Box } from "@mui/system";
import React, { useRef } from "react";
import Slider from "react-slick";
import { Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const kommand = [
  {
    name: "Халилов Фаррух",
    profession: "Юрист",
    phone: "+998913353861",
    email: "zarafshan_group@umail.uz",
    img: "/Images/komanda/1.jpg",
  },

  {
    name: "Бозоров Фозил",
    profession: "Заместитель Директора",
    phone: "+998906187870",
    email: "zarafshan_group@umail.uz",
    img: "/Images/komanda/5.jpg",
  },
  {
    name: "Файзиев Ойбек Ганиевич",
    profession: "Директор Ташкентского филиала",
    phone: "+998787702020",
    email: "zarafshan_group@umail.uz",
    img: "/Images/komanda/2.jpg",
  },
  {
    name: "Касимов Шухрат",
    profession: "Директор",
    phone: "+998787702020",
    email: "zarafshan_group@umail.uz",
    img: "/Images/komanda/3.jpg",
  },
  {
    name: "Паянов Мажид",
    profession: "Помощник Директора",
    phone: "+998906187870",
    email: "zarafshan_group@umail.uz",
    img: "/Images/komanda/4.jpg",
  },
  {
    name: "Бозоров Фозил",
    profession: "Заместитель Директора",
    phone: "+998906187870",
    email: "zarafshan_group@umail.uz",
    img: "/Images/komanda/5.jpg",
  },

  {
    name: "Файзиев Ойбек Ганиевич",
    profession: "Директор Ташкентского филиала",
    phone: "+998787702020",
    email: "zarafshan_group@umail.uz",
    img: "/Images/komanda/2.jpg",
  },
];

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "40px",
  slidesToShow: 5,
  speed: 500,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const CommandCarousel = () => {
  const slider = useRef();
  const next = () => {
    slider.current?.slickNext();
  };
  const previous = () => {
    slider.current?.slickPrev();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        py: 2,
      }}
    >
      <Box
        sx={{
          "& svg": {
            color: "white",
            "&:hover": {
              color: "gold",
            },
          },
        }}
      >
        <IconButton onClick={previous}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={next}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Slider style={{ width: "100%" }} ref={slider} {...settings}>
        {kommand.map((item, i) => (
          <Item data={item} key={item.img} />
        ))}
      </Slider>
    </Box>
  );
};

export const Item = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
        ".slick-center &": {
          backgroundImage: "url('/Images/zgg.svg')",
          opacity: 1,
          transform: "scale(1.1)",
        },
        transform: "translateY(10px)",
        opacity: 0.6,
        position: "relative",
        transition: "all .3s ease-in-out",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "130px",
        height: "130px",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          ".slick-center &:hover": {
            display: "block",
          },
          display: "none",
          position: "absolute",
          top: "-10px",
          zIndex: 9999999,
          left: 0,
          width: "100px",
          height: "100px",
          borderRadius: "10px",
          boxShadow: 2,
          bgcolor: "red",
        }}
      ></Box>
      <img
        src={data.img}
        alt={data.name}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default CommandCarousel;
