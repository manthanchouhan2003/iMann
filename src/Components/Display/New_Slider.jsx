
import React, { useEffect, useRef, useState } from "react";
import '../CSS/New_Slider.css'

const New_Slider = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const discriptionRef = useRef(null);

  const [currentData, setCurrentData] = useState({
    image: "https://www.qualwebs.com/_next/static/media/software-development.676efabd.svg",
    contentText: "Software development",
    description: "Our software solutions are crafted with precision, designed to meet the unique demands of your business. As a software development company, we craft robust, scalable solutions for businesses of all sizes.",
    path: "/services/software-development",
  });

  const dataMappings = [
    {
      image: "https://www.qualwebs.com/_next/static/media/software-development.676efabd.svg",
      contentText: "Software Development",
      description: " Our software solutions are crafted with precision, designed to meet the unique demands of your business. As a software development company, we craft robust, scalable solutions for businesses of all sizes.",
      path: "/services/software-development",
    },
    {
      image: "https://www.qualwebs.com/_next/static/media/digital-transformation.86a219cf.svg",
      contentText: "Digital Transformation",
      description: " Embrace the future with confidence. Our transformation strategies empower businesses to thrive in an ever-evolving digital landscape.",
      path: "/services/digital-transformation",
    },
    {
      image: "https://www.qualwebs.com/_next/static/media/web-development.81ef7005.svg",
      contentText: "Web & Mobile App Development",
      description: "From sleek, responsive designs to powerful backend systems, we breathe life into your unique visions. Explore a world the possibilities with our seasoned web development team.",
      path: "/services/web-development",
    },
   
    // Add more data as needed
  ];

  const currentSectionIndex = useRef(0);
    // Function to block and unblock scrolling
    const toggleScroll = (enableScroll) => {
      if (enableScroll) {
        // Enable scrolling
        document.body.style.overflow = 'auto';
      } else {
        // Disable scrolling
        document.body.style.overflow = 'hidden';
      }
    };

  useEffect(() => {
    const handleScroll = () => {
      const emptyDiv1 = document.getElementById("empty-id1");
      const emptyDiv2 = document.getElementById("empty-id2");
      const emptyDiv3 = document.getElementById("empty-id3");
    

      const rect1 = emptyDiv1.getBoundingClientRect();
      const rect2 = emptyDiv2.getBoundingClientRect();
      const rect3 = emptyDiv3.getBoundingClientRect();
    

      const isInViewport = (rect) => {
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        );
      };

      if (isInViewport(rect1) && currentSectionIndex.current !== 0) {
        currentSectionIndex.current = 0;
        toggleScroll(false);
        handleAnimation(0);
      } else if (isInViewport(rect2) && currentSectionIndex.current !== 1) {
        currentSectionIndex.current = 1;
        toggleScroll(false);
        handleAnimation(1);
      } else if (isInViewport(rect3) && currentSectionIndex.current !== 2) {
        currentSectionIndex.current = 2;
        toggleScroll(false);
        handleAnimation(2);
      } 
    };

    const handleAnimation = (index) => {
      imageRef.current.style.width = "0px";
      // imageRef.current.style.left = "550px";
      headingRef.current.style.opacity = 0;
      discriptionRef.current.style.opacity = 0;

      setTimeout(() => {
        imageRef.current.style.width = "600px"
        // imageRef.current.style.left = "450px";
        headingRef.current.style.opacity = 1;
        discriptionRef.current.style.opacity = 1;
        setCurrentData(dataMappings[index]);

        setTimeout(() => {
          
          
          // Enable scrolling after the animation is complete
          toggleScroll(true);
        }, 1000);

      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="green-sec">
    <div className="slider-layout">
     <div className="Parent-class" id="parent-class-id">

     <h2 className="qualwebs-sec dark">
          What we do<br />
          <span>Our services</span>
          <b>.</b>
        </h2>

        <div className="col-12">
          <div className="image-style">
            <div className="silent-div">
            <div className="sliding-on-of cal-12" ref={imageRef}>  
              <img id="scrollImage"  class="centered-image" src={currentData.image} alt="" />
            </div>
            </div>
            <h2 className="fade-out show" id="backgroundHeading" ref={headingRef}>
              {currentData.contentText}
            </h2>
          </div>
          <div className="text-box-new1 show" id="what-we-do" ref={discriptionRef}>
            {currentData.description}
          </div>
          <div className="btn-position">

          </div>
        <div className="lets-code">
      
        </div>
          <div className="scrolling-show"> ------- SCROLL </div>
        </div>
      </div>


      <div className="my-empty-div" id="empty-id1"></div>
      <div className="my-empty-div" id="empty-id2"></div>
      <div className="my-empty-div" id="empty-id3"></div>
     
      

      </div>
    </div>



  );
};
export default New_Slider; 