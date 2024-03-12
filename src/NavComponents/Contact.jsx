// import React, { useEffect, useRef } from "react";
// import { useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../Components/CSS/GloballyUsed.css";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import axios from "axios"; 

// gsap.registerPlugin(ScrollTrigger);

// function Contact() {
//   const TextRef = useRef(null);
//   const secTextRef = useRef(null);
//   const imgCRef = useRef(null);
//   const circleRef = useRef(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     role: "",
//     email: "",
//     phone_number: "",
//     company: "",
//     subject: "",
//     message: "",
//     keep_posted: 0,
//   });
//   const [disableAction, setDisableAction] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     setMessage({
//       ...message,
//       [name]: null,
//     });
//   };


//   useEffect(() => {
//     gsap.fromTo(
//       imgCRef.current,
//       {
//         opacity: 0,
//         y: 20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         delay: 0.5, // Delay the animation by 1 second
//       }
//     );
//     gsap.fromTo(
//       TextRef.current,
//       {
//         opacity: 0,
//         y: 20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "elastic.out",
//         delay: 0.4, // Delay the animation by 1 second
//       }
//     );
//     gsap.fromTo(
//       circleRef.current,
//       {
//         opacity: 0,
//         y: 20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         delay: 1.8, // Delay the animation by 1 second
//       }
//     );
//     gsap.fromTo(
//       secTextRef.current,
//       {
//         opacity: 0,
//         y: 20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         delay: 0.9, // Delay the animation by 1 second
//       }
//     );
//     // Your code for animations or other effects using gsap and ScrollTrigger
//   }, []);
//   const [message, setMessage] = useState({});
//   const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

//   const validateEmail = (e) => {
//     if (e.match(isValidEmail)) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setDisableAction(true);
//     if (!formData.name) {
//       setMessage({ name: "Please enter your name", type: " text-danger" });
//       setDisableAction(false);
//       return false;
//     }

//     if (!formData.role) {
//       setMessage({ role: "Please enter title", type: " text-danger" });
//       setDisableAction(false);
//       return false;
//     }

//     if (!formData.email) {
//       setMessage({ email: "Please enter email address", type: " text-danger" });
//       setDisableAction(false);
//       return false;
//     }

//     if (!validateEmail(formData.email)) {
//       setMessage({
//         email: "Please enter valid email address",
//         type: " text-danger",
//       });
//       setDisableAction(false);
//       return false;
//     }

//     if (!formData.phone_number) {
//       setMessage({
//         phone_number: "Please enter phone number",
//         type: " text-danger",
//       });
//       setDisableAction(false);
//       return false;
//     }

//     let form = new FormData();
//     form.append("name", formData.name);
//     form.append("role", formData.role);
//     form.append("email", formData.email);
//     form.append("phone_number", formData.phone_number);
//     form.append("company", formData.company);
//     form.append("subject", formData.subject);
//     form.append("message", formData.message);
//     form.append("keep_posted", formData.keep_posted);

//     axios
//       .post("https://old.qualwebs.com/qw_contact_us.php", form)
//       .then((res) => {
//         if (res?.data?.status == 200) {
//           setFormData({
//             name: "",
//             role: "",
//             email: "",
//             phone_number: "",
//             company: "",
//             subject: "",
//             message: "",
//             keep_posted: 0,
//           });
//           setMessage({ success: res?.data?.message, type: " text-success" });
//           setTimeout(() => {
//             setDisableAction(false);
//             setMessage({});
//           }, 3000)
//         } else {
//           setMessage({ error: res?.data?.message, type: " text-danger" });
//           setDisableAction(false);
//           setTimeout(() => {
//             setMessage({});
//           }, 3000)
//         }
//       });
//   };

//   return (
//       <div className="contect-page">
//         <div className="col-12">
//           <div className="container px-4">
//             <div className="row top-section-content ">
//               <div className="col-md">
//                 <div className="sub-main top-0 mb-5 mt-md-5 pt-md-5 font-weight-bold">CONTACT US</div>
//                 <div className="work-main top-0" ref={TextRef}>
//                   Tell us <br/>
//                   about your project<span>.</span>
//                 </div>
//               </div>
//               {/*<div className="bg-circle" ref={circleRef}>*/}
//               {/*  <svg height="1030" width="1030" className="bg-circle">*/}
//               {/*    <circle*/}
//               {/*        cx="615"*/}
//               {/*        cy="515"*/}
//               {/*        r="515"*/}
//               {/*        stroke="#9c9c9c"*/}
//               {/*        stroke-width="1"*/}
//               {/*        stroke-dasharray="3236 3236"*/}
//               {/*        fill="#00694b"*/}
//               {/*        stroke-dashoffset="0"*/}
//               {/*    ></circle>*/}
//               {/*  </svg>*/}
//               {/*</div>*/}
//               <div className="col-md d-flex justify-content-around">
//                 {/*<div className="solving-line mt-3">*/}
//                 {/*  Fill out our form below <br/>*/}
//                 {/*  or send us an email. <br/>*/}
//                 {/*  _.*/}
//                 {/*</div>*/}
//                 <div className="col-12 pera" ref={secTextRef}>
//                   <Container className="">
//                     <Row className="">
//                       <Col md={10} className="px-0">
//                         <Form onSubmit={handleSubmit}>
//                           <Form.Group className={message?.name ? "custom-form-group invalid" : "custom-form-group"}>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Name"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                             />
//                             {!!message?.name && <small className="fs-10 text-danger">
//                               {message?.name}
//                             </small>}
//                           </Form.Group>
//                           <Form.Group className={message?.company ? "custom-form-group invalid" : "custom-form-group"}>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Company/Organization"
//                                 name="company"
//                                 value={formData.company}
//                                 onChange={handleChange}
//                             />
//                             {!!message?.company && <small className="fs-10 text-danger">
//                               {message?.company}
//                             </small>}
//                           </Form.Group>


//                           <Form.Group
//                               controlId="formemail"
//                               className={message?.email ? "custom-form-group invalid" : "custom-form-group"}
//                           >
//                             <Form.Control

//                                 type="email"
//                                 placeholder="Email address"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                             {!!message?.email && <small className="fs-10 text-danger">
//                               {message?.email}
//                             </small>}
//                           </Form.Group>
//                           <Form.Group
//                               controlId="formphone_number"
//                               className={message?.phone_number ? "custom-form-group invalid" : "custom-form-group"}
//                           >
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Phone number"
//                                 maxLength={15}
//                                 name="phone_number"
//                                 value={formData.phone_number}
//                                 onChange={handleChange}
//                             />
//                             {!!message?.phone_number && <small className="fs-10 text-danger">
//                               {message?.phone_number}
//                             </small>}
//                           </Form.Group>
//                           <Form.Group className={message?.role ? "custom-form-group invalid" : "custom-form-group"}>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Title/Role"
//                                 name="role"
//                                 value={formData.role}
//                                 onChange={handleChange}
//                             />
//                             {!!message?.role && <small className="fs-10 text-danger">
//                               {message?.role}
//                             </small>}
//                           </Form.Group>
//                           <Form.Group className={message?.subject ? "custom-form-group invalid" : "custom-form-group"}>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="What we can help you with?"
//                                 name="subject"
//                                 value={formData.subject}
//                                 onChange={handleChange}
//                             />
//                             {!!message?.subject && <small className="fs-10 text-danger">
//                               {message?.subject}
//                             </small>}
//                           </Form.Group>


//                           <Form.Group
//                               controlId="formmessage"
//                               className={message?.message ? "custom-form-group invalid" : "custom-form-group"}
//                           >
//                             <Form.Control

//                                 as="textarea"
//                                 rows={7}
//                                 placeholder="Please tell us more... (E.g.: Your idea, timeline, budget.)"
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                             />
//                             {!!message?.message && <small className="fs-10 text-danger">
//                               {message?.message}
//                             </small>}
//                           </Form.Group>
//                           <div className='d-flex justify-content-between'>
//                             <Button
//                                 variant=""
//                                 type="submit"
//                                 className="custom-form-group px-5 py-3 rounded-pill mt-3"
//                                 style={{
//                                   backgroundColor: "#00694b",
//                                   color: "white",
//                                   zIndex: "99",
//                                 }}
//                                 disabled={disableAction}
//                             >
//                               Submit your request
//                             </Button>
//                             {!!message?.success && <small className="fs-10 text-warning my-auto">
//                               {message?.success}
//                             </small>}
//                             {!!message?.error && <small className="fs-10 text-danger my-auto">
//                               {message?.error}
//                             </small>}
//                           </div>
//                         </Form>
//                       </Col>
//                     </Row>
//                   </Container>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="case-study-new  justify-content-end">let's&nbsp;connect</div>
//         </div>
//         <div className="container d-none px-md-3 px-4">

//           <div className="row">
//             <div className="col-md-6 mb-5 mv-md-0" >

//             </div>
//             <div className="col-md-6 d-none d-md-block">
//               <img
//                   ref={imgCRef}
//                   className="contect-img"
//                   src="https://images.ctfassets.net/eqb1x10m46e1/nuNnRtIBRwGlAtbXtpy9l/19c20dabd2230698a357a4d08b013afc/letstalk__1_.jpg"
//                   alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }

// export default Contact;

import React from 'react'

const Contact = () => {
  return (
    <div>        <div>
    <div className="col-12">
<div className="container">
<div className="row top-section-content ">
    <div className="col">
        <div className="sub-main font-weight-bold">Happy To Connect</div>
        <div className="work-main">
        A digital-first approach to <br /> strategy and creative.
            <br /> _
        </div>
    </div>
    <div className="col d-flex justify-content-around">
        <div className="solving-line mt-3">
        Feel free to reach out to us via email at : manthanchouhan2003@gmail.com <br />
         or connect at : +91 900985591
        
        </div>
    </div>
</div>
</div>
<div className="case-study-new  justify-content-end">Coming&nbsp;Soon</div>
</div>
</div></div>
  )
}

export default Contact