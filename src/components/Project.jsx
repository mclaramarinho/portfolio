import React from "react";

function Project(props){
    if(props.index % 2 === 0){
        return(
            <div className="container w-75 mb-5 mt-5">
                <div className="row">
                    <div className="col-lg-5 col-xl-4 col-12 ms-auto">
                        <div className="row"></div>
                        <a target="_blank" href={props.liveLink} className="row proj-img">
                            <img src={props.img} alt="" />
                        </a>
                        <div className="row"></div>
                    </div>
                    <div className="col-lg-5 col-xl-6 col-12 ms-lg-5 me-lg-auto">
                        <div className="row proj proj-tipo">{props.tipo}</div>
                        <div className="row proj proj-title">{props.title}</div>
                        <div className="row proj proj-desc">{props.descricao}</div>
                        <div className="row proj proj-stack mt-4">{props.stack}</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container w-75 mb-5 mt-5">
                <div className="row">
                    <div className="col-lg-5 col-xl-6 col-12 me-5 ms-auto">
                        <div className="row proj-tipo">{props.tipo}</div>
                        <div className="row proj-title">{props.title}</div>
                        <div className="row proj-desc">{props.descricao}</div>
                        <div className="row proj-stack mt-4">{props.stack}</div>
                    </div>
                    <div className="col-lg-5 col-xl-4 col-12 me-auto">
                        <div className="row"></div>
                        <a target="_blank" href={props.liveLink} className="row proj-img">
                            <img src={props.img} alt="" />
                        </a>
                        <div className="row"></div>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}

export default Project;