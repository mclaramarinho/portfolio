import React from "react";
import Project from "./Project";
import projects from "../projects";

function ProjectsSection(){
return (
    <section id="projects">
        <div className="container">
        <div className="row text-center"><h2>PROJECTS</h2></div>
            {projects.map(item =>{
                return(
                    <Project 
                        img={item.imgSrc}
                        tipo={item.type.toUpperCase()}
                        descricao={item.description}
                        stack={item.stack.join("\t")}
                    />
                )
            })}
        </div>
    </section>
)
}

export default ProjectsSection;