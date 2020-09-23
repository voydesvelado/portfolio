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
          <h4>Condusef</h4>
          <p>
            Aplicación para el registro de comisiones financieras por parte de
            SOFOMES, SOFIPOS, etc.
          </p>
        </div>
        <div className="proy">
          <h4>Simple Store</h4>
          <p>
            Maqueta minimalista de una tienda en línea. Layout simple y straight
            to the point.
          </p>
        </div>
        <div className="proy">
          <h4>Random Gradient</h4>
          <p>
            Aplicación generadora de gradientes aleatorios listos para usarse en
            css.
          </p>
        </div>
        <div className="proy">
          <h4>Lux Academy</h4>
          <p>
            Landing page de una academia fotográfica. Cuenta con infinite scroll
            en la sección de galería.
          </p>
        </div>
      </div>
    </div>
  );
}
