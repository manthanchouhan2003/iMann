import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Components/CSS/GloballyUsed.css";
import { Link } from 'react-router-dom';
import Imagee1 from '../Components/images/service4.webp'
import Imagee2 from '../Components/images/service11.webp'
import Imagee3 from '../Components/images/service3.webp'
import Imagee4 from '../Components/images/service6.webp'
import Imagee5 from '../Components/images/service2.webp'
import Imagee6 from '../Components/images/service5.webp'
import Imagee7 from '../Components/images/servive9.webp'
import Imagee8 from '../Components/images/servive10.webp'




gsap.registerPlugin(ScrollTrigger);

function Services() {
    const imgAboutRef = useRef(null);

    useEffect(() => {
        const imgAbout = imgAboutRef.current;

        gsap.to(imgAbout, {
            scrollTrigger: {
                trigger: imgAbout,
                width: "50%",
                start: "top 95%",
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
                <div className="container">
                    <div className="row top-section-content ">
                        <div className="col-md">
                            <div className="sub-main font-weight-bold">WHAT WE DO</div>
                            <div className="work-main">
                                Driving brands <br /> forward online.
                            </div>
                        </div>
                        <div className="col-md d-flex justify-content-around">
                            <div className="solving-line mt-3">
                                A digital-first approach to <br /> strategy and creative.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="case-study-new  justify-content-end">INSIGHTS</div>
            </div>
            <div class=" ">
                <div class="col-12 align-items-center justify-content-center about-image-div">
                    <img
                        className="about-image"
                        ref={imgAboutRef}
                        src="https://images.ctfassets.net/eqb1x10m46e1/2RrHj5uzWWLrCcB6smZlDe/77cf7163b1b3709b8476f61ccd323519/Services-Hero-3.jpg?w=2000&h=1333&q=90&fm=webp"
                        alt=""
                    />
                </div>
                <div className="main-block-of-display-scroll">
                    <div className="container">
                        <div className="header-featured pt-5 mt-md-5">
                            <h1>Our Services.</h1>
                        </div>
                        <div className="col-md-10 mx-auto">
                          <div className="row">
                              <div className="col-md-6 px-md-5 px-4">
                                  <div className="col-12 right-image" id="img-test">
                                      <Link to="">
                                          <img
                                              src={Imagee5}
                                              alt=""
                                          />
                                          <div className="display-tect-on-image">
                                              <h1>Web <br/>Development</h1>

                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-6 px-md-5 px-4">
                                  <div className="col-12 right-image" id="img-a">
                                      <Link to="">
                                          <img
                                              src={Imagee6}
                                              alt=""
                                          />
                                          <div className="display-tect-on-image">
                                              <h1>Software <br/> Development</h1>

                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-6 px-md-5 px-4">
                                  <div className="col-12 right-image" id="img-test">
                                      <Link to="">
                                          <img
                                              src={Imagee7}
                                              alt=""
                                          />
                                          <div className="display-tect-on-image">
                                              <h1>UI/UX Design</h1>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-6 px-md-5 px-4">
                                  <div className="col-12 right-image" id="img-a">
                                      <Link to="">
                                          <img
                                              src={Imagee8}
                                              alt=""
                                          />
                                          <div className="display-tect-on-image">
                                              <h1>DevOps Eng. </h1>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-6 px-md-5 px-4">
                                  <div className="col-12 right-image" id="img-test">
                                      <Link to="">
                                          <img
                                              src={Imagee1}
                                              alt=""
                                          />
                                          <div className="display-tect-on-image">
                                              <h1>Digital <br/> Transformation</h1>

                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-6 px-md-5 px-4">
                                  <div className="col-12 right-image" id="img-a">
                                      <Link to="">
                                          <img
                                              src={Imagee2}
                                              alt=""
                                          />
                                          <div className="display-tect-on-image">
                                              <h1>Mobile <br/>Development </h1>
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
                                              <h1>Data <br/>Engineering</h1>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                              <div className="col-md-6 px-md-5 px-4">
                                  <div className="col-12 right-image" id="img-b">
                                      <Link to=""> <img
                                          src={Imagee4}
                                          alt=""
                                      />
                                          <div className="display-tect-on-image">
                                              <h1>Software <br/>Testing & QA</h1>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="green-sec">
                    <div className="friends-section">
                        <div className="friends">
                            Technologies we use<span>.</span>
                        </div>
                        <div class="container text-center ">
                            <div class="row">

                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-php.64f0f091.svg" alt=""/>
                                </div>
                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-symfony.2ec12741.svg" alt=""/>
                                </div>
                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-symfony.2ec12741.svg" alt=""/>
                                </div>
                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-laravel.93e7cd0a.svg" alt=""/>
                                </div>
                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-node.87b9058d.svg " alt=""/>
                                </div>

                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-html.5acd13d8.svg " alt=""/>
                                </div>
                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-css.9ae150dc.svg " alt=""/>
                                </div>
                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-sass.e1a854a7.svg " alt=""/>
                                </div>
                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-swift.30d4748f.svg " alt=""/>
                                </div>
                                <div class="col service-images"><img
                                    src="https://www.qualwebs.com/_next/static/media/logo-vue.ddcbc0d7.svg " alt=""/>
                                </div>

                                <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-react.e5dfb5ff.svg " alt="" /></div>
                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-jquery.398c653f.svg " alt="" /></div>
                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-wordpress.03397088.svg" alt="" /></div>
                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-sql.0a524dd9.svg " alt="" /></div>
                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-c.9683d579.svg " alt="" /></div>

                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-firebase.a7e2e52a.svg " alt="" /></div>
                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-salesforce.75b0dc3b.svg " alt="" /></div>
                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-shopify.fa87a862.svg " alt="" /></div>
                            <div class="col service-images"><img src=" https://www.qualwebs.com/_next/static/media/logo-flutter.a54bbf94.svg" alt="" /></div>
                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-firebase.a7e2e52a.svg " alt="" /></div>

                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-google-cloud.c55e885c.svg " alt="" /></div>
                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-servicenow.277aebe7.svg " alt="" /></div>
                            <div class="col service-images"><img src="https://www.qualwebs.com/_next/static/media/logo-azure.903aaa6e.svg " alt="" /></div>
                            <div class="col service-images"><img src=" https://www.qualwebs.com/_next/static/media/logo-aws.abd02e2f.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
             
                <div className="col-12 py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-5">
                                <div className="col-12  stick-section ">
                                Key benefits <br /> of our digital services<span>.</span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="heading-paragraph-service">
                                    <h1>01. Flexible Engagement Model.</h1>
                                    <p>
                                    We promote transparency and scalability in every interaction through our skilled developers and advanced technology.
                                    </p>
                                </div>
                                <div className="heading-paragraph-service">

                                    <h1>02. Progressive Roadmap.</h1>
                                    <p>
                                    We prioritize client project details, delivering results as a goal-oriented development company.
                                    </p>
                                </div>
                                <div className="heading-paragraph-service">
                                    <h1>03. Scalable Teams.</h1>
                                    <p>
                                    We scale skilled team members to meet evolving project needs.
                                    </p>
                                </div>
                                <div className="heading-paragraph-service">
                                    <h1>04. Robust architecture.</h1>
                                    <p>
                                    We adapt and add skilled resources for tailored software development that yields profits.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                </div>
            </div>

        </div>
    );
}

export default Services;
