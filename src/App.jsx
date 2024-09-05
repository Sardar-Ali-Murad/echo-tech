import React from "react";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Commitment from "./components/Commitment";
import Policy from "./components/Policy";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <div className="page_wrapper">
        <Headers />
        <main className="page_content" id="home">
          <Hero />
          <div id="about" className="py-5"></div>
          <About />
          <Services />
          <Commitment />
          <Policy />
          <div className="py-5" id="port"></div>
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
