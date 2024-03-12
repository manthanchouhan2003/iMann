import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../CSS/GloballyUsed.css';
import { Link } from 'react-router-dom';
import Imagee1 from '../images/DisplayScrollAi.webp'
import Imagee2 from '../images/classmates-reading-library-steps.webp'
import Imagee3 from '../images/DisplayScrollHotel.webp'
import Imagee4 from '../images/DisplayuScrollGym.webp'
import CulturalBelives from '../ReUsableComponents/CulturalBelives';


gsap.registerPlugin(ScrollTrigger);

function DisplayScroll() {
  const imgARef = useRef(null);
  const imgBRef = useRef(null);

  useEffect(() => {
    const imgA = imgARef.current;
    const imgB = imgBRef.current;

    // Check if the screen width is greater than a specific threshold (e.g., 768 pixels for tablets)
    const isTablet = window.innerWidth > 768;

    if (isTablet) {
      gsap.to(imgA, {
        scrollTrigger: {
          trigger: imgA,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
          scrub: true,
        },
        bottom: '170px',
        duration: 0.7,
        ease: 'power3.out',
      });

      gsap.to(imgB, {
        scrollTrigger: {
          trigger: imgB,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
          scrub: true,
        },
        bottom: '160px',
        duration: 0.3,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <>
    <CulturalBelives></CulturalBelives>
        <div className="main-block-of-display-scroll">
      <div className="container">
        <div className="header-featured pt-5 ">
          <h1>Featured Work</h1>
        </div>
        <div className="col-md-10 mx-auto">
        <div className="row">
            <div className="col-md-6  px-4">
              <div className="col-12 right-image" id="img-test">
                <Link to="">
                  <img
                      src={Imagee1}
                      alt=""
                  />
                  <div className="display-tect-on-image">
                    <h1>Artificial <br/>Intelligence</h1>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 px-md-5 px-4">
              <div className="col-12 right-image" id="img-a" ref={imgARef}>
                <Link to="">
                  <img
                      src={Imagee2}
                      alt=""
                  />
                  <div className="display-tect-on-image">
                    <h1>Education </h1>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 px-md-5 px-4">
              <div className="col-12 right-image">
                <Link to="">
                  <img
                      src={Imagee3} alt=""
                  />
                  <div className="display-tect-on-image">
                    <h1>Hospitality <br /> & Leisure</h1>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 px-md-5 px-4">
              <div className="col-12 right-image" id="img-b" ref={imgBRef}>
                <Link to=""> <img
                    src={Imagee4}
                    alt=""
                />
                  <div className="display-tect-on-image">
                    <h1>Fitness <br/>& Wellness</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>

  );
}

export default DisplayScroll;
