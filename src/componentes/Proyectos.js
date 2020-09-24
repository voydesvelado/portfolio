import React, { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Proyectos() {
  const proyectosRef = useRef(null);

  useEffect(() => {
    gsap.from(proyectosRef.current, {
      duration: 1.4,
      y: 50,
      opacity: 0,
      ease: "Power3.in",
      scrollTrigger: {
        id: "proyectos",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div className="proyectos" ref={proyectosRef} id="proyectos">
      <h3>Proyectos</h3>
      <div className="gridp">
        <div className="proy">
          <div className="pica"></div>
          <div className="desc">
            <h4>Simple Store</h4>
            <p>
              Maqueta minimalista de una tienda en línea. Layout simple y
              straight to the point.
            </p>
            <a
              className="btn2"
              href="https://voydesvelado.github.io/simple-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar
            </a>
          </div>
        </div>
        <div className="proy">
          <div className="pica2"></div>
          <div className="desc">
            <h4>Random Gradient</h4>
            <p>
              Aplicación generadora de gradientes aleatorios listos para usarse
              en css.
            </p>
            <a
              className="btn2"
              href="https://voydesvelado.github.io/random-grad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar
            </a>
          </div>
        </div>
        <div className="proy">
          <div className="pica3"></div>
          <div className="desc">
            <h4>Lux Academy</h4>
            <p>
              Landing page de una academia fotográfica. Cuenta con infinite
              scroll en la sección de galería.
            </p>
            <a
              className="btn2"
              href="https://voydesvelado.github.io/lux-academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
