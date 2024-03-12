import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Components/CSS/GloballyUsed.css'

gsap.registerPlugin(ScrollTrigger);

function Work() {
  const imgARef = useRef(null);
  const imgBRef = useRef(null);
  const imgCRef = useRef(null);
  const imgDRef = useRef(null);
  const imgERef = useRef(null);
  const imgFRef = useRef(null);
  // const imgGRef = useRef(null);
  const imgHRef = useRef(null);

  useEffect(() => {
    const imgA = imgARef.current;
    const imgB = imgBRef.current;
    const imgC = imgCRef.current;
    const imgD = imgDRef.current;
    const imgE = imgERef.current;
    const imgF = imgFRef.current;
    // const imgG = imgGRef.current;
    const imgH = imgHRef.current;
    gsap.to(imgA, {
      scrollTrigger: {
        trigger: imgA,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse',
        scrub: true, // Smoothly updates the animation as you scroll
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
        scrub: true, // Smoothly updates the animation as you scroll
      },
      bottom: '160px',
      duration: 0.3,
      ease: 'power3.out',
    });
    gsap.to(imgC, {
        scrollTrigger: {
          trigger: imgB,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
          scrub: true, // Smoothly updates the animation as you scroll
        },
        bottom: '160px',
        duration: 0.3,
        ease: 'power3.out',
      });
      gsap.to(imgD, {
        scrollTrigger: {
          trigger: imgB,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
          scrub: true, // Smoothly updates the animation as you scroll
        },
        bottom: '160px',
        duration: 0.3,
        ease: 'power3.out',
      });
      gsap.to(imgE, {
        scrollTrigger: {
          trigger: imgB,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
          scrub: true, // Smoothly updates the animation as you scroll
        },
        bottom: '160px',
        duration: 0.3,
        ease: 'power3.out',
      });
      gsap.to(imgF, {
        scrollTrigger: {
          trigger: imgB,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
          scrub: true, // Smoothly updates the animation as you scroll
        },
        bottom: '160px',
        duration: 0.3,
        ease: 'power3.out',
      });
      gsap.to(imgF, {
        scrollTrigger: {
          trigger: imgB,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
          scrub: true, // Smoothly updates the animation as you scroll
        },
        bottom: '160px',
        duration: 0.3,
        ease: 'power3.out',
      });
      gsap.to(imgH, {
        scrollTrigger: {
          trigger: imgB,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
          scrub: true, // Smoothly updates the animation as you scroll
        },
        bottom: '160px',
        duration: 0.3,
        ease: 'power3.out',
      });

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
        top: "48%",
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
    <div className="sub-main font-weight-bold">CASE STUDIES</div>
    <div className="work-main">
    Some of our <br /> finest work.
          </div>
    </div>
    <div className="col d-flex justify-content-around">
    <div className="solving-line mt-3">
    Solving diverse business needs <br /> through great design and UX.
            <br /> _
           
          </div>
    </div>
  </div>
</div>
<div className="case-study-new  justify-content-end">CASE STUDIES</div>
        </div>


 
      <div className="container">
        <div className="row">
          <div className="col-md-6 right-image" id="img-test">
 
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/7lfORZnDawbgHbpBDKApA3/4eb2ae12c4e443ea7a96a4d84f49e5da/Baunfire_Case_Study_-_Lumana_-_00_-_Thumbnail_-_840x1122-A__1_.png?w=1120&h=1496&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Lumana</h1>
              Lorem ipsum dolor,
            </div>
          </div>
          <div className="col-md-6 right-image" id="img-a" ref={imgARef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/4mEGXgt1ZbAULLNGBxylr9/8d0b75b0443d2b0866e690d8b2e5594a/Baunfire_CaseStudy_Incorta_CorporateB2BWebsite_Thumbnail_A.png?w=840&h=1122&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Boomer</h1>
              Lorem ipsum dolor, sit
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="right-image">
              <img
                src="https://images.ctfassets.net/eqb1x10m46e1/7fzu9TTuBamA12tf8vPOzt/73cbedcb9d3e7069daabc9a2f3fa6187/Baunfire_Case_Study_-_Ambi_Robotics_-_Thumbnail_Image.png?w=560&h=748&q=90&fm=webp"
                alt=""
              />
              <div className="display-tect-on-image">
                <h1>Design</h1>
                dolor, sit amet consectetur
              </div>
            </div>
          </div>
          <div className="col-md-6 right-image" id="img-b" ref={imgBRef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/16G6lC8DlOQYBvjjgtK1kQ/c5a938bcb5741d838a46ed0b6f654f94/00_-_Thumbnail_-_840x1122_C.png?w=840&h=1122&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Optimal blaster</h1>
              Lorem ipsum consectetur
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 right-image" id="img-test">
 
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/7lfORZnDawbgHbpBDKApA3/4eb2ae12c4e443ea7a96a4d84f49e5da/Baunfire_Case_Study_-_Lumana_-_00_-_Thumbnail_-_840x1122-A__1_.png?w=1120&h=1496&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Lumana</h1>
              Lorem ipsum dolor,
            </div>
          </div>
          <div className="col-md-6 right-image" id="img-a" ref={imgCRef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/4mEGXgt1ZbAULLNGBxylr9/8d0b75b0443d2b0866e690d8b2e5594a/Baunfire_CaseStudy_Incorta_CorporateB2BWebsite_Thumbnail_A.png?w=840&h=1122&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Boomer</h1>
              Lorem ipsum dolor, sit
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="right-image">
              <img
                src="https://images.ctfassets.net/eqb1x10m46e1/7fzu9TTuBamA12tf8vPOzt/73cbedcb9d3e7069daabc9a2f3fa6187/Baunfire_Case_Study_-_Ambi_Robotics_-_Thumbnail_Image.png?w=560&h=748&q=90&fm=webp"
                alt=""
              />
              <div className="display-tect-on-image">
                <h1>Design</h1>
                dolor, sit amet consectetur
              </div>
            </div>
          </div>
          <div className="col-md-6 right-image" id="img-b" ref={imgDRef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/16G6lC8DlOQYBvjjgtK1kQ/c5a938bcb5741d838a46ed0b6f654f94/00_-_Thumbnail_-_840x1122_C.png?w=840&h=1122&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Optimal blaster</h1>
              Lorem ipsum consectetur
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 right-image" id="img-test">
 
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/7lfORZnDawbgHbpBDKApA3/4eb2ae12c4e443ea7a96a4d84f49e5da/Baunfire_Case_Study_-_Lumana_-_00_-_Thumbnail_-_840x1122-A__1_.png?w=1120&h=1496&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Lumana</h1>
              Lorem ipsum dolor,
            </div>
          </div>
          <div className="col-md-6 right-image" id="img-a" ref={imgERef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/2j25qGEC9lMXKc0MqQ8jla/bd067d37960cd54418a84db378a48473/Thumbnail_840_x_1122.png?w=840&h=1122&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Boomer</h1>
              Lorem ipsum dolor, sit
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="right-image">
              <img
                src="https://images.ctfassets.net/eqb1x10m46e1/7fzu9TTuBamA12tf8vPOzt/73cbedcb9d3e7069daabc9a2f3fa6187/Baunfire_Case_Study_-_Ambi_Robotics_-_Thumbnail_Image.png?w=560&h=748&q=90&fm=webp"
                alt=""
              />
              <div className="display-tect-on-image">
                <h1>Design</h1>
                dolor, sit amet consectetur
              </div>
            </div>
          </div>
          <div className="col-md-6 right-image" id="img-b" ref={imgFRef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/62Hue7UdLtvwdHnmXOk7nQ/1d37d102d7b645390b6e1d8f5fec4461/Baunfire_PlexCaseStudy_ListingThumbnailImage.png?w=840&h=1122&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Optimal blaster</h1>
              Lorem ipsum consectetur
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 right-image" id="img-test">
 
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/4mEGXgt1ZbAULLNGBxylr9/8d0b75b0443d2b0866e690d8b2e5594a/Baunfire_CaseStudy_Incorta_CorporateB2BWebsite_Thumbnail_A.png?w=840&h=1122&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Lumana</h1>
              Lorem ipsum dolor,
            </div>
          </div>
          {/* ref={imgGRef} */}
          <div className="col-md-6 right-image" id="img-a" >
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/edY0pwNUbhhm13wUYTZnT/b4c5904c774f5451c044374b39de92aa/Baunfire_Case_Study_AEye_Website_Thumbnail_Image_A.png?w=840&h=1122&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Boomer</h1>
              Lorem ipsum dolor, sit
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="right-image">
              <img
                src="https://images.ctfassets.net/eqb1x10m46e1/759SwxgRVQA6dvTRf1yef7/2c0885221dc099bef4816339454f2b91/Listing_Thumbnail_Drak.png?w=1260&h=1683&q=90&fm=webp"
                alt=""
              />
              <div className="display-tect-on-image">
                <h1>Design</h1>
                dolor, sit amet consectetur
              </div>
            </div>
          </div>
          <div className="col-md-6 right-image" id="img-b" ref={imgHRef}>
            <img
              src="https://images.ctfassets.net/eqb1x10m46e1/3itjpN0MFEMk9UsnvFbqsr/c94b8355898cfb523c6b6b6b3d72c3ea/Baunfire_Case_Study_-_CtrlStack_-_00_-_Thumbnail_-_840x1122.png?w=1260&h=1683&q=90&fm=webp"
              alt=""
            />
            <div className="display-tect-on-image">
              <h1>Optimal blaster</h1>
              Lorem ipsum consectetur
            </div>
          </div>
        </div>  
      </div>
     
    </div>
  );
}

export default Work;