import React, { useEffect } from "react";
import Home_About from "../components/Home/Home_About"
import Home_Contact from "../components/Home/Home_Contact"
import Home_Projects from "../components/Home/Home_Projects"
import Typed from "typed.js";

const Home = () => {
  // Type animation for h1 
  useEffect(() => {
    var typed = new Typed('.typed-h1', {
      strings: ["Hi, I'm Ryan."],
      typeSpeed: 30
    });
  }, [])
  return (
    <main>
      <div id="bg-square"></div>
      <section id="home-landing">
        <article id="cta" className="mobile-100vh">
          <h1 className="typed-h1"></h1>
          <p>I'm currently a Web & UX Student, learning to one day become a Freelance Full-Stack Developer.</p>
        </article>
        <Home_About />
      </section>
      <Home_Projects />
      <Home_Contact />
    </main>
  )
}

export default Home
