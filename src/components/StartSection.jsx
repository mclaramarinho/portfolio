    import React from "react";
    import avatar from '../assets/avatar.png'
    function StartSection(){ 
        return(
            <section id="start">
                <div className="lat-icon-bar container ms-4 position-absolute start-0 top-50" style={{width:"fit-content"}}>
                        <a target="_blank" href="https://www.linkedin.com/in/mclaramarinho/" className="row lat-icon mb-5"><i class="fa-brands fa-linkedin"></i></a>
                        <a target="_blank" href="https://github.com/mclaramarinho" className="row lat-icon"><i class="fa-brands fa-github"></i></a>
                </div>
                <div className="sect-cont container">
                    <div className="row" >
                        <div className="start-col col-lg-6 col-12 me-lg-5 ms-lg-auto m-sm-auto" style={{width:"fit-content", borderRadius: "100%", backgroundColor: "white", overflow:"clip"}}>
                            <img src={avatar} alt="" className="mw-100" />
                        </div>
                        <div className="col-lg-4 col-12 ms-lg-5 me-lg-auto m-sm-auto">
                            <p className="resp-start intro-parag op50">Hello, my name is</p>
                            <h1 className="resp-start ">Clara Marinho</h1>
                            <p className="resp-start intro-parag">I'm a front-end developer and here you can know a little more about me.</p>
                            <div class="resp-start row btn-container">
                                <div class="col-6">
                                    <a class="btn btn-start px-3 py-3"><i class="fa-solid fa-download"/> Resume</a>
                                </div>
                                <div class="col-6">
                                    <a class="btn btn-start btn-highlight py-3" href="#projects">Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }

    export default StartSection;