import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useState } from "react"
function App() {
  const [language, setLanguage] = useState("en")

  return (
    <div className="min-h-screen bg-[#0B1633] text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Projects language={language} />
      <About language={language} />
      <Skills language={language} />
      <Contact language={language} />
      <Footer />
    </div>
  )
}

export default App