import React from "react";
import DisplayScroll from "../Components/Display/DisplayScroll";
import DisplayScrollSecond from "../Components/Display/DisplayScrollSecond";
import Front_page from "../Components/Display/Front_page";
import MouseFollower from "../Components/Display/MouseFollower";
import New_Slider from "../Components/Display/New_Slider";
import Why_qualwebs from "../Components/Display/Why_qualwebs";

function Landing() {
  return (
    <>
    
      <Front_page />
        <DisplayScroll />
        <Why_qualwebs />
        <New_Slider />
        <MouseFollower />
        <DisplayScrollSecond />
    </>
  );
}

export default Landing;
