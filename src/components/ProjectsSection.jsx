import React, { useEffect, useState } from "react";
import Project from "./Project";
import projects from "../projects";

function ProjectsSection(){
    const [count, setCount] = useState(2);
    const [items, setItems] = useState([]);
    const [btnTxt, setBtnTxt] = useState("SHOW MORE");
   
    useEffect(() => {
        updateList();
    }, [count])

    function loadMore(){
        if(projects.length - count == 1){
            setCount(count+1);
            setBtnTxt("SHOW LESS");
        }else if(count < projects.length){
            setCount(count+2);
        }else if(count == projects.length){
            setCount(2);
            setBtnTxt("SHOW MORE");
        }
    }

    function updateList(){
        setItems(projects.slice(0, count));
    }

    return (
        <section id="projects">
            <div className="sect-cont container sect-proj">
            <div className="row text-center mb-5"><h2>PROJECTS</h2></div>
                
                {items.map((item, index) =>{
                    
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
                <div className="row">
                    <a class="btn btn-start py-3 width-fit m-auto" href="#projects" onMouseUp={() => loadMore()}>{btnTxt}</a>
                </div>
                
            </div>
        </section>
    )
}

export default ProjectsSection;