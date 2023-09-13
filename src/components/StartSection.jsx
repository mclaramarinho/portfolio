import React from "react";
import avatar from '../assets/avatar.png'
function StartSection(){ 
    return(
        <section id="start">
            <div className="container ms-4 position-absolute start-0 top-50" style={{width:"fit-content"}}>
                    <a href="" className="row lat-icon mb-5"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="" className="row lat-icon"><i class="fa-brands fa-github"></i></a>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 m-auto" style={{width:"fit-content", borderRadius: "100%", backgroundColor: "white", overflow:"clip"}}>
                        <img src={avatar} alt="" className="mw-100" />
                    </div>
                    <div className="col-lg-6 col m-auto">
                        <p className="intro-parag op50">Hello, my name is</p>
                        <h1>Clara Marinho</h1>
                        <p className="intro-parag">I'm a front-end developer and here you can know a little more about me.</p>
                        <div class="row btn-container">
                            <div class="col-lg-6">
                                <button class="btn btn-start">Resume</button>
                            </div>
                            <div class="col-lg-6">
                                <button class="btn btn-start btn-highlight">Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default StartSection;