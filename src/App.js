import React from "react";
import "./styles/main.scss"

import textPt from "./components/languages/text-portugues"
import textEn from "./components/languages/text-english"

import Header from "./components/shared/Header"
import PresentationSection from "./components/shared/PresentationSection"
import NavProjectsSection from "./components/shared/NavProjectsSection"
import ProjectsSection from "./components/shared/ProjectsSection"
import Footer from "./components/shared/Footer"

function App() {

  const [lightModeActive, setLightModeActive] = React.useState(false)
  const [inEnglish, setInEnglish] = React.useState(true)

  function handlerChangeTheme() {
    setLightModeActive((prevState) => !prevState)
  }

  function toggleLanguage() {
    setInEnglish((prevState) => !prevState)
  }
  
  function scrollToButton(destino) {
    const elemento = document.getElementById(destino)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`App ${inEnglish ? "dark-mode" : "light-mode"}`}>
      <Header 
        inEnglish={inEnglish}
        toggleLanguage={toggleLanguage}
        scrollToButton={scrollToButton}
        button1text={(inEnglish ? textEn.button1text : textPt.button1text)}
        button2text={(inEnglish ? textEn.button2text : textPt.button2text)}
      />
      <PresentationSection />
      <NavProjectsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
