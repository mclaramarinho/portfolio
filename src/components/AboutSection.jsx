import React from "react";
import skills from "../skills";
import learning from "../learning";
import SkillsGrid from "./SkillsGrid";


function AboutSection (){
return(
        <section id="about">
            <div className="sect-cont container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-10 col-xs-12 me-md-5 ms-md-auto m-sm-auto">
                        <h2 className="row resp-start" style={{width: "fit-content"}}>ABOUT ME</h2>
                        <p className="row resp-center resp-center-1 about-parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem a augue pharetra lacinia. Fusce ut ex sit amet nisi sodales laoreet ac eget diam. Cras vestibulum interdum bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className="row resp-center about-parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem a augue pharetra lacinia. Fusce ut ex sit amet nisi sodales laoreet ac eget diam. Cras vestibulum interdum bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className="row resp-center about-parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lorem a augue pharetra lacinia. Fusce ut ex sit amet nisi sodales laoreet ac eget diam. Cras vestibulum interdum bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-10 col-xs-12 ms-md-5 me-md-auto py-md-5 m-sm-auto">
                        <div className="col-12 about-skills skills-1 resp-start">
                            <h3 className="col-12 about-skills resp-start">MAIN KNOWLEDGE</h3>
                            <SkillsGrid array={skills} cols={4} />
                        </div>
                        <div className="col-12 mt-5 resp-start" style={{width: "fit-content"}}>
                            <h3 className="col-12">LEARNING NOW</h3>
                            <SkillsGrid array={learning} cols={3} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;