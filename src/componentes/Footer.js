import React, { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const contactoRef = useRef(null);

  useEffect(() => {
    gsap.from(contactoRef.current, {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "Power3.out",
      scrollTrigger: {
        trigger: contactoRef.current,
        toggleActions: "play none none reverse",
        start: "top bottom",
      },
    });
  }, []);

  return (
    <div className="wrap" id="contacto" ref={contactoRef}>
      <h4>Trabajemos juntos</h4>
      <a href="mailto:contactochka@gmail.com">contactochka@gmail.com</a>
    </div>
  );
}
