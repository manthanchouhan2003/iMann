import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Components/CSS/GloballyUsed.css";
import CulturalBelives from "../Components/ReUsableComponents/CulturalBelives";
import ClintReview from "../Components/ReUsableComponents/ClintReview";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgAboutRef = useRef(null);

  useEffect(() => {
    const imgAbout = imgAboutRef.current;
    // const orangeElement = orangeRef.current;
    gsap.to(imgAbout, {
      scrollTrigger: {
        trigger: imgAbout,
        width: "50%",
        start: "top 90%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
        scrub: true, // Smoothly updates the animation as you scroll
      },

      width: "90%",
      duration: 0.7,
      ease: "power3.out",
    });
    gsap.fromTo(
      ".work-main",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1, // Delay the animation by 1 second
      }
    );
    gsap.to(imgAbout, {
      scrollTrigger: {
        trigger: imgAbout,
        width: "50%",
        start: "top 95%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
        scrub: true, // Smoothly updates the animation as you scroll
      },

      width: "60%",
      duration: 0.7,
      ease: "power3.out",
    });
    gsap.fromTo(
      ".work-main",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1, // Delay the animation by 1 second
      }
    );
    gsap.fromTo(
      ".sub-main",
      {
        left: "0%",
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.8,
      }
    );
    gsap.fromTo(
      ".solving-line",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "elastic.out",
        delay: 0.4, // Delay the animation by 1 second
      }
    );
    gsap.fromTo(
      ".case-study-new",
      {
        top: "0%",
        opacity: 0,
      },
      {
        top: "47%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="main-block-of-display-scroll">
      <div className="col-12">
        <div className="container px-4">
          <div className="row top-section-content ">
            <div className="col-md">
              <div className="sub-main font-weight-bold">WHO WE ARE</div>
              <div className="work-main">
                A passionate <br /> team, rooted in digital.
              </div>
            </div>
            <div className="col-md d-flex justify-content-around">
              <div className="solving-line mt-3">
                Building great things in the <br />
                heart of India <br />
                _.
              </div>
            </div>
          </div>
        </div>
        <div className="case-study-new  justify-content-end">
          WHO&nbsp;WE&nbsp;ARE
        </div>
      </div>

      <div class="col-12 d-flex align-items-center justify-content-center about-image-div">
        <img
          className="about-image"
          ref={imgAboutRef}
          src="https://images.ctfassets.net/eqb1x10m46e1/3ZQjRiXa3bXwrwgCEZkpYM/6b5709a7dbd8679b04be774f3bcab951/About-Hero-2.jpg?w=2000&h=1333&q=90&fm=webp"
          alt=""
        />
      </div>
      <div className="col-12">
        <div className="container">
          <div className="row top-section-content ">
            <div className="col">
              <div className="sub-main-new font-weight-bold">
                A DIGITAL AGENCY
              </div>
              <div className="work-main">
                Building great websites for industry-leading brands.
              </div>
            </div>
            <p className="about-info">
              Hello, I'm Manthan Chouhan, the founder of iMann. With a
              background in computer science engineering, I bring a passion for
              innovation and technology to everything I do. Prior to founding
              iMann, I served as the Lead of the Google Developer Students Club
              at CDGI, where I honed my skills in community building and
              fostering a culture of learning. Additionally, I had the privilege
              of serving as the General Secretary of Citronics Technomanagement
              Fest in 2024, where I organized and led a team to deliver a
              successful event. My dedication to excellence and leadership
              extends to my role as the Head of Sponsorship for Citronics in
              both 2023 and 2024, where I worked tirelessly to forge
              partnerships and support the growth of the organization. I am
              committed to leveraging my expertise and experiences to drive
              iMann forward, delivering innovative solutions and exceeding
              expectations.
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="equal-section px-0 container-fluid">
        <CulturalBelives></CulturalBelives>

        <div className="green-sec">
          <div id="service-logo-yellow">
            <div class="col-12 col-md-12 px-md-5 px-2 mx-auto content sec-text mb-0">
              <div class="">
                <h1 class="mb-0 fw-medium lh-50">
                  iMann offers end-to-end services to enhance your business
                  value, from product ideation and strategy formulation to
                  prototyping, user testing, and product creation. We help turn
                  your ideas into successful products that meet your unique
                  business needs.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 section service-grid header-dark py-5">
          <div className="container mb-4">
            <div className="col-12 head mb-50">
              <h2 className=" text-center ">
                <span className="Core-values">Our core values.</span>
              </h2>
            </div>
            <div className="col-md-10 mx-auto content mb-0 px-1 px-md-0">
              <div className="row">
                <div
                  className="col-md-4 p-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="col-12 card card-md service-card h-100">
                    <img
                      className="img-fluid"
                      src="https://www.qualwebs.com/_next/static/media/accountability.a9279eb6.svg"
                    />
                    <h5>Accountability</h5>
                    <p className="mb-0">
                      Accept responsibility, be transparent, and be trustworthy.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 p-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="col-12 card card-md service-card h-100">
                    <img
                      className="img-fluid"
                      src="https://www.qualwebs.com/_next/static/media/equity.58c6439b.svg"
                    />
                    <h5>Equity</h5>
                    <p className="mb-0">
                      To be fair and impartial towards all concerned.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 p-2"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="col-12 card card-md service-card h-100">
                    <img
                      className="img-fluid"
                      src="https://www.qualwebs.com/_next/static/media/innovation.33e4c0c1.svg"
                    />
                    <h5>Innovation</h5>
                    <p className="mb-0">
                      Acknowledge challenges and have the courage to resolve
                      them differently.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 p-2"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="col-12 card card-md service-card h-100">
                    <img
                      className="img-fluid"
                      src="https://www.qualwebs.com/_next/static/media/integrity.cf30ea42.svg"
                    />
                    <h5>Integrity</h5>
                    <p className="mb-0">We do the right thing with honesty.</p>
                  </div>
                </div>
                <div
                  className="col-md-4 p-2"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="col-12 card card-md service-card h-100">
                    <img
                      className="img-fluid"
                      src="https://www.qualwebs.com/_next/static/media/people-focused.2723f3f8.svg"
                    />
                    <h5>People focused</h5>
                    <p className="mb-0">
                      We foster an environment of collaboration and “people
                      first” policies.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-4 p-2 pb-0"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="col-12 card card-md service-card h-100">
                    <img
                      className="img-fluid"
                      src="https://www.qualwebs.com/_next/static/media/communication.333212b9.svg"
                    />
                    <h5>Communication</h5>
                    <p className="mb-0">
                      Care about enriching interaction, everything that indulges
                      positivity in all lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="green-sec h-100">
          <div className="animated-content-container">
            <div className="container work-sec-top text-left">
              <div className="sub-main font-weight-bold">A DIGITAL AGENCY</div>
              <div className="work-main-bg">
                Making great things <br /> in the heart of India❤️.
                <br />
              </div>
            </div>
          </div>
        </div>
        <ClintReview></ClintReview>
      </div>
    </div>
  );
}

export default About;
