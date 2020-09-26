import React from "react";
import Nav from "./componentes/Nav";
import Hero from "./componentes/Hero";
import Proyectos from "./componentes/Proyectos";
import About from "./componentes/About";
import Tools from "./componentes/Tools";
import Footer from "./componentes/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <Nav />
      <div className="grid">
        <Hero />
        <Proyectos />
        <Tools />
        <About />

        <Footer />
      </div>
    </>
  );
}

export default App;
