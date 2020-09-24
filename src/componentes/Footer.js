import React, { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const contactoRef = useRef(null);

  useEffect(() => {
    gsap.from(contactoRef.current, {
      duration: 1.3,
      y: 50,
      opacity: 0,
      ease: "Power3.in",
      scrollTrigger: {
        id: "contacto",
        toggleActions: "play none none reverse",
        start: "top center",
      },
    });
  }, []);

  return (
    <div className="wrap" ref={contactoRef}>
      <h4 id="contacto">Trabajemos juntos</h4>
      <a href="mailto:contactochka@gmail.com">contactochka@gmail.com</a>
    </div>
  );
}
