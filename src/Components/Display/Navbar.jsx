
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import { gsap } from "gsap";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const logoRef = useRef();
  const textRef = useRef(null);
  const menuRef = useRef();
  const componentRef = useRef();
  const [isGreenSecVisible, setIsGreenSecVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0;

      const greenSecElement = document.querySelector(".green-sec");

      if (greenSecElement) {
        const rect = greenSecElement.getBoundingClientRect();
        const isGreenSecInView = rect.top < threshold && rect.bottom >= 0;

        setIsGreenSecVisible(isGreenSecInView);
      }
    };

    // Add event listener to handle scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  function animateLogoLeave() {
    gsap.to(".logo-right", {
      opacity: 0,
      x: "30px",
      stagger: 0.1,
      duration: .3,
      ease: "linear"
    });
    gsap.to(".logo-left", {
      opacity: 0,
      x: "-50px",
      stagger: 0.1,
      duration: .1,
      ease: "linear"
    });
    textRef.current.classList.add("hide");
  }

  function animateLogoEnter() {
    textRef.current.classList.remove("hide");
    gsap.to(".logo-right", {
      opacity: 1,
      x: "-0px",
      stagger: 0.1,
      duration: .2,
      ease: "linear"
    });
    gsap.to(".logo-left", {
      opacity: 1,
      x: "0px",
      stagger: 0.1,
      duration: .2,
      ease: "linear"
    });
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.from(logoRef.current, {
        scrollTrigger: {
          trigger: logoRef.current,
          markers: false,
          start: "200% top",
          onEnter: () => {
            logoRef.current.classList.remove("hide")
          },
          onEnterBack: () => {
            logoRef.current.classList.add("hide")
          }
        }
      });
      gsap.from(textRef.current, {
        autoAlpha: 0,
        delay: 1.5,
        opacity: 0,
        y: "-100px",
        duration: .8,
        ease: "back"
      });

      setTimeout(() => {
        document.getElementsByClassName("orbit")[0]?.classList.add("show")
      }, 1500);

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          markers: false,
          start: "500% top",
          end: "500% top",
          onEnter: () => {
            animateLogoLeave();
          },
          onEnterBack: () => {
            animateLogoEnter();
          }
        }
      });

      gsap.from(menuRef.current, {
        autoAlpha: 0,
        delay: 1.5,
        opacity: 0,
        y: "-100px",
        duration: .8,
        ease: "back"
      });



    }, componentRef);

    return () => ctx.revert();

  }, []);
  const closeNavbar = () => {
    setNavOpen(false);
  };


  return (
    <div className="nav">
      <div className="col-12 nav-container">
        <div className="navbar-main">
          <div className="row align-items-center">
            <div className="col">
          
                <div className="logo">
                 
                  <div className="col-auto p-0 text-logo" ref={textRef} id="text-logo">
     <h1 className="white"><span>i</span>Mann<span>.</span></h1>
                  </div>
                </div>
          
            </div>

            <div className="col-auto">
              <Link to="/contact">
                <div className={`lets-talk ${isGreenSecVisible ? 'lets-talk-white' : ''}`}>
                  LET'S TALK
                </div>
              </Link>
            </div>
            <div className="col-auto">
            <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
              <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-150%",
            transition: navOpen ? "0.5s" : "0.5s",
          }}
        >

          <div
            className="menu-nevbar"
            style={{
              top: navOpen ? "26%" : "65%",
              transitionDelay: navOpen ? "0.8s" : "0s",
            }}
          >
            MENU
          </div>
          <ul className="nav-links">
            {/*<li className="nav-item">*/}
              {/*  <Link*/}
            {/*    to="/work"*/}
            {/*    style={{*/}
            {/*      top: navOpen ? "0" : "120px",*/}
            {/*      transitionDelay: navOpen ? "0.5s" : "0s",*/}
            {/*    }}*/}
            {/*    onClick={closeNavbar}*/}
            {/*  >*/}
            {/*    Work*/}
            {/*  </Link> */}
            {/*  <div className="nav-item-wrapper"></div>*/}
            {/*</li>*/}
            <li className="nav-item">
              <Link
                  to="/"
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.5s" : "0s",
                  }}
                  onClick={closeNavbar}
              >
                Home
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                  to="/about"
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.6s" : "0s",
                  }}
                  onClick={closeNavbar}
              >
                About
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                  to="/services"
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.7s" : "0s",
                  }}
                  onClick={closeNavbar}
              >
                Service
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                  to="/contact"
                  style={{
                    top: navOpen ? "0" : "120px",
                    transitionDelay: navOpen ? "0.8s" : "0s",
                  }}
                  onClick={closeNavbar}
              >
                Contact
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <Link*/}
            {/*    to="/insights"*/}
            {/*    style={{*/}
            {/*      top: navOpen ? "0" : "120px",*/}
            {/*      transitionDelay: navOpen ? "0.8s" : "0s",*/}
            {/*    }}*/}
            {/*    onClick={closeNavbar}*/}
            {/*  >*/}
            {/*    Insights*/}
            {/*  </Link>*/}
            {/*  <div className="nav-item-wrapper"></div>*/}
            {/*</li>*/}

          </ul>

          <div
              className="company-information"
              // style={{
              //   top: navOpen ? "69%" : "10%",
              //   transitionDelay: navOpen ? "0.5s" : "0s",
              // }}
          >
            <span>Info</span>
            <ul id="contact-info" className="list-unstyled contact-info">
              <li className="mb-1">
                <Link
                    className="text-mascot hover"
                  href="mailto:manthanchouhan20032gmail.com"
                >
                 manthanchouhan2003@gmail.com
                </Link>
              </li>
              <li className="mb-4">
                <Link className="link hover" href="tel:(02)91536200">
              +91 9009855911
                </Link>
              </li>
              <li className="hover" id="address">
           B-159 MIG-Colony,<br /> Indore, Madhya-Pradesh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
