import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Display/Footer";
import Navbar from "./Components/Display/Navbar";
import Work from "./NavComponents/Work";
import Insights from "./NavComponents/Insights";
import About from "./NavComponents/About";
import Services from "./NavComponents/Services";
import Landing from "./Pages/Landing";
import Contact from "./NavComponents/Contact";


function ScrollToTopOnMount() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <Router>
        <ScrollToTopOnMount />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/work" element={<ComingSoon/>} />
          <Route path="/insights" element={<ComingSoon/>} />
           <Route path="/services" element={<ComingSoon/>} /> */}
          <Route path="/work" element={<Work/>} />
          <Route path="/insights" element={<Insights/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTopOnNavigate />
      </Router>
    </div>
  );
}

export default App;
