
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Components/CSS/GloballyUsed.css'

gsap.registerPlugin(ScrollTrigger);

function Insights() {
  const scrollARef = useRef(null);
  const scrollBRef = useRef(null);
  const scrollCRef = useRef(null);

  useEffect(() => {
    const scrollA = scrollARef.current;
    const scrollB = scrollBRef.current;
    const scrollC = scrollCRef.current;

    gsap.fromTo(
      [scrollA, scrollB, scrollC],
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
        bottom: 200,
        duration: 2,
        ease: 'power1.out',
      }
    );

    gsap.fromTo('.work-main', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 1, // Delay the animation by 1 second
    });
    gsap.fromTo(".sub-main", {
      left: "0%",
      opacity: 0,
    }, {
      left: "10%",
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.8,
    });
    gsap.fromTo('.solving-line', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "elastic.out",
      delay: 0.4, // Delay the animation by 1 second
    });
    gsap.fromTo(".case-study-new", {
      top: "0%",
      opacity: 0,
    }, {
      top: "47%",
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: 1,
    });
  }, []);


  return (
    <div className="main-block-of-display-scroll">
       <div className="col-12">
        <div className="container">
  <div className="row top-section-content ">
    <div className="col">
    <div className="sub-main font-weight-bold">WHAT WE DO</div>
    <div className="work-main">
            Driving brands <br /> forward online.
          </div>
    </div>
    <div className="col d-flex justify-content-around">
    <div className="solving-line mt-3">
            A digital-first approach to <br /> strategy and creative.
            <br /> _
           
          </div>
    </div>
  </div>
</div>
<div className="case-study-new  justify-content-end">INSIGHTS</div>
        </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 right-image">
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/32sY8j2lvMVcGnRZEYLttc/8c87ec56e8a644b665974d2fee055a07/BaunfireBlog_EnhancingUXStrategicResearch_HeroImage.png?w=560&q=90"
              alt=""
            />
            <div className="content-of-image">
              <h1>Web & Design</h1>
              <p>
                It looks like your request is quite broad, <br></br>and you've
                simply mentioned
              </p>
            </div>
          </div>
          <div className="col-md-6 right-image" id='lets-do-scroll-a' ref={scrollARef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/5Ym3MtkY68s66IPM92S1Ab/02e2c079806ab245b38c405c66b78e70/BaunfireBlogImage-CapturingCustomersStrategicWireframing.png?w=560&q=90"
              alt=""
            />
            <div className="content-of-image">
              <h1>Web & Design</h1>
              <p>
                It looks like your request is quite broad,<br></br> and you've
                simply mentioned
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 right-image">
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/32sY8j2lvMVcGnRZEYLttc/8c87ec56e8a644b665974d2fee055a07/BaunfireBlog_EnhancingUXStrategicResearch_HeroImage.png?w=560&q=90"
              alt=""
            />
            <div className="content-of-image">
              <h1>Web & Design</h1>
              <p>
                It looks like your request is quite broad, <br></br>and you've
                simply mentioned
              </p>
            </div>
          </div>
          <div className="col-md-6 right-image" id='lets-do-scroll-a' ref={scrollCRef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/5Ym3MtkY68s66IPM92S1Ab/02e2c079806ab245b38c405c66b78e70/BaunfireBlogImage-CapturingCustomersStrategicWireframing.png?w=560&q=90"
              alt=""
            />
            <div className="content-of-image">
              <h1>Web & Design</h1>
              <p>
                It looks like your request is quite broad,<br></br> and you've
                simply mentioned
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="right-image">
              <img
                src="https://images.ctfassets.net/eqb1x10m46e1/550zJTvmohHMaXIjyS2uIc/663fcddaffdad330b20121bcb39df970/Baunfire-Blog-Image-Dialing-In-Design-Strategy-Year-Ahead-CMP.png?w=560&q=90"
                alt=""
              />
              <div className="content-of-image">
                <h1>Web & Design</h1>
                <p>
                  It looks like your request is quite broad,<br></br> and
                  you've simply mentioned
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 right-image" id='lets-do-scroll-b' ref={scrollBRef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/2es4ILVKCzUAAKPtxHXfjC/dc341cb459ee2f075c4b3b4922663477/CMP-BaunfireBlog-DialingInContentStrategyYearAhead-1920x1080.png?w=560&q=90"
              alt=""
            />
            <div className="content-of-image">
              <h1>Web & Design</h1>
              <p>
                It looks like your request is quite broad,<br></br> and you've
                simply men
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
