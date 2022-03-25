import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import AboutSection from "../Containers/About";
import MainSection from "../Containers/MainSection";
import NewsSection from "../Containers/NewsSection";

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      console.log(state, "state");    
      return (
        <ReactFullpage.Wrapper>
          <MainSection />
          <AboutSection />
          <NewsSection />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
