import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import StartSection from "./components/StartSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import bgpattern from './assets/endless-constellation.png'
function App(){
    
    setInterval(() => {
        window.onscroll = () =>{
                if(document.documentElement.scrollTop > 300){
                    document.getElementById("navbar").classList.add("dark-nav")
                    document.getElementById("navbar").classList.remove("transp-nav")
                }else{
                    document.getElementById("navbar").classList.remove("dark-nav")
                    document.getElementById("navbar").classList.add("transp-nav")
                }
            }
    }, 3000);
    
return(
    <div id="app">
        <a href="#"><i class="fa-solid fa-circle-chevron-up me-5 position-fixed end-0 bottom-0 mb-5 lat-icon"></i></a>
        <img src={bgpattern} className="bgImg" alt="" />
        <Navbar />
        
        <StartSection />

        <AboutSection />

        <ProjectsSection />

        <ContactSection />
        
        <footer className="my-5 text-center">Copyright © {new Date().getFullYear()} | Clara Marinho</footer>
    </div>
)
}

export default App;