import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  const mainRef = useRef(null);
  const heroaRef = useRef(null);
  const bgRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 0.5 } });

    timeline
      .to(mainRef.current, 0, { css: { visibility: "visible" } })
      .to(bgRef.current, 1.2, {
        width: "100%",
        ease: "Expo.easeInOut",
      })
      .from(
        heroaRef.current,
        { y: 50, opacity: 0, ease: "Power3.out" },
        "-=0.8"
      )
      .from(imgRef.current, { y: 50, opacity: 0, ease: "Power3.out" });
  }, []);

  return (
    <>
      <div className="bg" ref={bgRef}></div>
      <main id="main" ref={mainRef}>
        <section className="hero-a" ref={heroaRef}>
          <h1>David Herrera</h1>
          <h4>
            Estudiante de informática titulándose este año, me dedico a diseñar
            y desarrollar experiencias de usuario únicas.
          </h4>
          <a className="btn" href="#proyectos">
            proyectos
          </a>
          <p>
            <a
              href="https://github.com/voydesvelado"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github{" "}
            </a>
            | <a href="mailto:contactochka@gmail.com">Email</a> |{" "}
            <a
              href="https://www.facebook.com/aureolado"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </section>
        <section className="hero-b" ref={imgRef}>
          <div className="avatar"></div>
        </section>
      </main>
    </>
  );
}
