import React from "react";
import Navbar from "./components/Navbar";
import StartSection from "./components/StartSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App(){
return(
    <div>
        <a href="#"><i class="fa-solid fa-circle-chevron-up me-5 position-fixed end-0 bottom-0 mb-5 lat-icon"></i></a>
        
        <Navbar />
        
        <StartSection />

        <AboutSection />

        <ProjectsSection />

        <ContactSection />
        

    </div>
)
}

export default App;