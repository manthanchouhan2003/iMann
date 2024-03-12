
import "../CSS/MouseFollower.css"; // Import your CSS file
import React, { useEffect } from 'react';
import gsap from 'gsap';

const MouseFollower = () => {
  useEffect(() => {
    gsap.set(['.ball', '.ball-2'], { xPercent: -50, yPercent: -50 });

    const xToBall = gsap.quickTo('.ball', 'x', { duration: 0.6, ease: 'power3' });
    const yToBall = gsap.quickTo('.ball', 'y', { duration: 0.6, ease: 'power3' });

    const xToBall2 = gsap.quickTo('.ball-2', 'x', { duration: 0.3, ease: 'power3' });
    const yToBall2 = gsap.quickTo('.ball-2', 'y', { duration: 0.3, ease: 'power3' });

    const handleMouseMove = (e) => {
      xToBall(e.clientX);
      yToBall(e.clientY);

      xToBall2(e.clientX);
      yToBall2(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="ball"></div>
      <div className="ball-2"></div>
    </div>
  );
};

export default MouseFollower;
