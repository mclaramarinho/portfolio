import React from "react";
import Project from "./Project";
import projects from "../projects";

function ProjectsSection(){
return (
    <section id="projects">
        <div className="sect-cont container">
        <div className="row text-center"><h2>PROJECTS</h2></div>
            {projects.map((item, index) =>{
                
                return(
                    <Project 
                        index={window.innerWidth>=990 ? index : 0}
                        img={item.imgSrc}
                        title={item.title.toUpperCase()}
                        tipo={item.type.toUpperCase()}
                        descricao={item.description}
                        stack={item.stack.join(" | ").toUpperCase()}
                        liveLink = {item.live}
                    />
                )
            })}
        </div>
    </section>
)
}

export default ProjectsSection;