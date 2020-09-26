import gsap from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";

export default function Nav() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.to(navRef.current, 0, { css: { visibility: "visible" } });
    gsap.from(navRef.current, { opacity: 0, duration: 1, delay: 1.8 });
  }, []);

  return (
    <nav ref={navRef}>
      <h4>David Herrera</h4>
      <ul>
        <li>
          <a href="#main">Inicio</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#about">Acerca</a>
        </li>
      </ul>
    </nav>
  );
}
