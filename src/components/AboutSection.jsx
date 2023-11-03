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
                        <p className="row resp-center resp-center-1 about-parag">
                            Hey, there! I'm Clara, 22, Brazilian, based in sunny Recife, currently pursuing a degree in Systems Development 
                            and Analysis at Universidade Tiradentes. But beyond the classroom, I'm a web development enthusiast, 
                            with a strong focus on front-end, and embarking on a journey in the back-end realm. 
                            I also find immense satisfaction in overseeing projects and making ideas come to life. 
                        </p>
                        <br />
                        <p className="row resp-center about-parag">
                            My passion lies in continually expanding my tech-related skills and language sets. 
                            By the way, I can speak both Portuguese and English, and I'm on a mission to learn German. 
                            The more, the merrier, right? But it's not all about work! Beyond that, I'm a Star Wars fan, 
                            and I never say no to a slice of pizza, a cup of coffee, or some good rock music.
                        </p>
                        <br />
                        <p className="row resp-center about-parag">
                            Curious to see how my interests and skills translate into real-world projects? 
                            I invite you to explore my journey and witness the fusion of my passion, organization, 
                            and love for technology. Feel free to reach out, so we can create something awesome together. 
                            May the code be with you!
                        </p>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-10 col-xs-12 ms-md-5 me-md-auto py-md-5 m-sm-auto">
                        <div className="col-12 about-skills skills-1 resp-start">
                            <h3 className="col-12 about-skills resp-start">MAIN KNOWLEDGE</h3>
                            <SkillsGrid array={skills} cols={4} />
                        </div>
                        <div className="col-12 mt-5 resp-start" style={{width: "fit-content"}}>
                            <h3 className="col-12">NOVICE</h3>
                            <SkillsGrid array={learning} cols={4} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;