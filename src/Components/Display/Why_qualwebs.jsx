import React, {useRef } from "react";
import "../CSS/Why_qualwebs.css";

const Why_qualwebs = () => {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const paragraph = container.querySelector(".animated-paragraph");

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const containerOffsetTop = container.offsetTop;
  //     const triggerOffset = 0.9 * window.innerHeight; // 80% of screen height

  //     if (scrollY > containerOffsetTop - triggerOffset) {
  //       const progress = Math.min(
  //         1,
  //         (scrollY - containerOffsetTop + triggerOffset) /
  //           (container.clientHeight - triggerOffset)
  //       );

  //       gsap.to(container, {
  //         width: `${progress * 100}%`,
  //         duration: 0.5,
  //         ease: "power2.out",
  //         onComplete: () => {
  //           gsap.to(paragraph, {
  //             opacity: 1,
  //             duration: 0.5,
  //             delay: 0.1,
  //           });
  //         },
  //       });
  //     }
  //   };

  //   // Attach scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // ref={containerRef}
  return (
    <div className="green-sec">
      <div className="animated-content-container" >
        <div className="circle1">
          <svg
            id="ele-circle1"
            width="600"
            height="600"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="500"
              cy="500"
              r="499"
              stroke="white"
              strokeOpacity="0.5"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 px-4">
              <h2 className="animated-heading mb-5">Why  <h1 className="white"><span>i</span>Mann<span>.</span></h1></h2>
              <p className="animated-paragraph ps-md-5 pt-md-4 ps-3">
                At iMann, we distinguish ourselves through a combination of
                expertise, innovation, and commitment to quality. iMann harnesses
                cutting-edge technologies including blockchain, web3, machine learning,
                and artificial intelligence to provide innovative solutions for our
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why_qualwebs;
