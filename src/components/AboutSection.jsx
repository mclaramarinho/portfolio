import React from "react";
import skills from "../skills";
import learning from "../learning";
import SkillsGrid from "./SkillsGrid";


function AboutSection (){
return(
    <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <h2>ABOUT ME</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem a augue pharetra lacinia. Fusce ut ex sit amet nisi sodales laoreet ac eget diam. Cras vestibulum interdum bibendum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem a augue pharetra lacinia. Fusce ut ex sit amet nisi sodales laoreet ac eget diam. Cras vestibulum interdum bibendum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem a augue pharetra lacinia. Fusce ut ex sit amet nisi sodales laoreet ac eget diam. Cras vestibulum interdum bibendum.</p>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="row">
                        <h3>MAIN KNOWLEDGE</h3>
                        <SkillsGrid array={skills} />
                    </div>
                    <div className="row">
                        <h3>LEARNING NOW</h3>
                        <SkillsGrid array={learning} />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default AboutSection;