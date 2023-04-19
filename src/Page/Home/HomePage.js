import React from 'react'
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills"
import Contact from "../../Components/Contact/Contact"

function HomePage() {
  return (
    <div>
        <Hero/>
  <About/>
  <Projects/>
  <Skills/>
  <Contact/>
    </div>
  )
}

export default HomePage