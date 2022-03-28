import { Box } from "@mui/system";
import React, { useRef } from "react";
import Slider from "react-slick";
import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const newsArr = [
  {
    title: "Lorem ipsum dolor sit amment /////////////",
    date: "18 / 23",
    img: "/Images/news/1.jpg",
  },

  {
    title: "Lorem ipsum dolor sit amment /////////////",
    date: "18 / 23",
    img: "/Images/news/5.jpg",
  },
  {
    title: "Lorem ipsum dolor sit amment /////////////",
    date: "18 / 23",
    img: "/Images/news/2.jpg",
  },
  {
    title: "Lorem ipsum dolor sit amment /////////////",
    date: "18 / 23",
    img: "/Images/news/3.jpg",
  },
  {
    title: "Lorem ipsum dolor sit amment /////////////",
    date: "18 / 23",
    img: "/Images/news/4.jpg",
  },
  {
    title: "Lorem ipsum dolor sit amment /////////////",
    date: "18 / 23",
    img: "/Images/news/5.jpg",
  },

  {
    title: "Lorem ipsum dolor sit amment /////////////",
    date: "18 / 23",
    img: "/Images/news/2.jpg",
  },
];

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "40px",
  slidesToShow: 4,
  speed: 500,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
  ],
};

const NewsCarousel = () => {
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
        {newsArr.map((item, i) => (
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
        "&:hover": {
          transform: "translateY(0)",
        },
        transform: "translateY(10px)",
        position: "relative",
        transition: "all .3s ease-in-out",
        width: "100%",
        height: "300px",
        px: "30px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: "100%",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        <img
          src={data.img}
          alt={"dfasdf"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <Typography fontWeight={"bold"} color={"#9B7323"} variant="h5">
          {data.date}
        </Typography>
        <Typography paragraph color={"white"}>
          {data.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsCarousel;
