import React from "react";

function Navbar(){
    return(
        <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Clara Marinho</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav me-0 ms-auto">
                <a class="nav-link" href="#about">ABOUT ME</a>
                <a class="nav-link" href="#projects">PROJECTS</a>
                <a class="nav-link" href="#contact">CONTACT ME</a>
                <a class="nav-link mt-0 btn btn-start btn-highlight">RESUME</a>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;