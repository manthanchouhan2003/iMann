import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../CSS/Front_page.css";
import image1 from  "../images/002-location.png";
import image2 from "../images/kangaroo.png";

const FrontPage = () => {
  const shutterTextRef = useRef(null);
  const mainTextRef = useRef(null);
  const img1TextRef = useRef(null);
  const img2TextRef = useRef(null);

  useEffect(() => {
    
    // Animation for "we-are" element
    // gsap.fromTo(".we-are", {
    //   yPercent: 0,
    //   opacity: 0,
    // }, {
    //   yPercent: 50,
    //   opacity: 1,
    //   duration: 1.5,
    //   ease: "power4.out",
    // });
    gsap.fromTo(
      ".front-page-parent-div",
      {
        width: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0,
      }
    );
    gsap.fromTo(
      ".we-are",
      {
        top:"0%", // Set top to "10%" for mobile view
        opacity: 0,
      },
      {
        top: window.innerWidth < 768 ? "17.5%" : "38%", // Set top to "10%" for mobile view
        opacity:window.innerWidth < 768 ? 0.2 :0.8,
        duration: 1.5,
        ease: "power2.out",
        delay: 1.3,
      }
    );
    

    // Animation for "shutter-text-bottom" element with delay
    gsap.fromTo(
      shutterTextRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1.8, // Delay the animation by 1 second
      }
    );
    gsap.fromTo(
      mainTextRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "elastic.out",
        delay: 1, // Delay the animation by 1 second
      }
    );
    gsap.fromTo(
      img1TextRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        delay: 1.8, // Delay the animation by 1 second
      }
    );

    gsap.fromTo(
      img2TextRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 2.2, // Delay the animation by 1 second
      }
    );
    gsap.fromTo(
      ".sub-heading-text-left",
      {
        // left: "0%",
        opacity: 0,
      },
      {
        // left: "7%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 2,
      }
    );
    gsap.fromTo(
      ".india-img",
      {
        bottom: "0%",
        opacity: 0,
      },
      {
        bottom: "14%",
        opacity: 0.2,
        duration: 1.5,
        ease: "power2.out",
        delay: 1.6,
      }
    );
    gsap.fromTo(
      ".icon-a",
      {
        top: "0%",
        opacity: 0,
      },
      {
        top: "12%",
        opacity: 0.3,
        duration: 1.5,
        ease: "power2.out",
        delay: 1.6,
      }
    );
  }, []);

  return (
    <div className="green-sec">
    <div className="front-page-parent-div">
      <img className="icon-a" src={image1} alt="" />

      {/* <img className="india-img" src={image2} alt="" /> */}
      <div className="we-are"><span>i</span>Mann<span>.</span></div>
      <div className="content-main">
        <div className="homepage-container-animation">
          <h6 className="sub-heading-text-left mb-5">
            A SOFTWARE DEVELOPMENT COMPANY FOR AMBITIOUS <br /> PEOPLES 
          </h6>
          <div className="int-text">
            <h2 ref={shutterTextRef} className="shutter-text-bottom  mb-4">
            Driving digital growth <br />across all major platforms<span>.</span>
            </h2>
            <h6 ref={mainTextRef} className="main-content">
              As a global powerhouse in digital transformation, we enable both
              established <br />
              enterprises and start-ups to realize sustainable business
              solutions through <br /> strategic digital investments.
            </h6>
          </div>
        </div>
      </div>
    </div>
    </div>  

  );
};

export default FrontPage;
