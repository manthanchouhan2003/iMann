import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../CSS/GloballyUsed.css';
import Aimg1 from '../images/ig1.webp'
import Aimg2 from '../images/ig2.webp'
import Aimg3 from '../images/ig3.webp'
import Aimg4 from '../images/ig4.webp'

gsap.registerPlugin(ScrollTrigger);

function DisplayScrollSecond() {
  const scrollARef = useRef(null);
  const scrollBRef = useRef(null);

  useEffect(() => {
    const scrollA = scrollARef.current;
    const scrollB = scrollBRef.current;

    // Check if the screen width is greater than a specific threshold (e.g., 768 pixels for tablets)
    const isTablet = window.innerWidth > 768;

    if (isTablet) {
      gsap.fromTo(
        [scrollA, scrollB],
        {
          bottom: -20,
        },
        {
          scrollTrigger: {
            trigger: [scrollA, scrollB],
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
          bottom: 150,
          duration: 0.5,
          ease: 'power1.out',
        }
      );
    }
  }, []);

  return (
    <div className="main-block-of-display-scroll">

      <div className="container">
        <div className="header-featured pt-5 mt-md-5">
          <h1>Latest Insights</h1>
        </div>
        <div className="col-md-10 mx-auto">
        <div className="row">
            <div className="col-md-6 px-4">
              <div className="col-12 right-image">
                <img
                    src={Aimg1} alt=""
                />
                <div className="content-of-image bottom-0 mt-5">
                  <h1>Fashion and Apparel</h1>
                  <p>
                    Deals with the design, production,<br/> and sale of clothing and accessories.
                  </p>
                </div>
              </div>
            </div>
          <div className="col-md-6 px-4">
            <div className="col-12 right-image" id='lets-do-scroll-a' ref={scrollARef}>
              <img
                  src={Aimg2} alt=""
              />
              <div className="content-of-image bottom-0 mt-5">
                <h1>Hospitality & Leisure
                </h1>
                <p>
                  Where service meets serenity, creating <br/> memorable experiences for relaxation and enjoyment.
                </p>
              </div>
            </div>
            </div>
          <div className="col-md-6 px-4">
            <div className="col-12">
              <div className="right-image">
                <img
                    src={Aimg3} alt=""
                />
                <div className="content-of-image bottom-0 mt-5">
                  <h1>Logistics and transportation</h1>
                  <p>
                    The backbone of global connectivity, seamlessly moving <br/> goods and people to their destinations
                    with efficiency
                  </p>
                </div>
              </div>
            </div>
            </div>
          <div className="col-md-6 px-4">
            <div className="col-12 right-image" id='lets-do-scroll-b' ref={scrollBRef}>
              <img
                  src={Aimg4} alt=""
              />
              <div className="content-of-image bottom-0 mt-5">
                <h1>Real Estate</h1>
                <p>
                  Involves buying, selling,<br/> and managing properties and land
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayScrollSecond;
