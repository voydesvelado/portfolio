import React, { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      duration: 1.4,
      y: 50,
      opacity: 0,
      ease: "Power3.in",
      scrollTrigger: {
        id: "about",
        toggleActions: "play none none reverse",
        start: "center center",
      },
    });
  }, []);
  return (
    <section className="about" id="about">
      <div className="helper" ref={aboutRef}>
        <div className="img-wrapper">
          <div className="avatarb"></div>
        </div>
        <div className="abouta">
          <h3>Acerca de mí</h3>
          <p>
            Tengo 23 años, radico en la Ciudad de México, soy minimalista,
            curioso, innovador y radical cuando es necesario.
          </p>
          <p>
            Desde muy joven he aprendido por mi cuenta diseño gráfico, ya con mi
            licenciatura en informática casi finalizada he decidido enfocarme
            completamente al UX/UI.
          </p>
        </div>
      </div>
    </section>
  );
}
