import React from "react";

function Project(props){
    if(props.index % 2 === 0){
        return(
            <div className="container w-75 mb-5 resp-proj">
                <div className="row">
                    <div className="col-lg-6 col-xl-5 col-12 ms-auto">
                        <div className="row"></div>
                        <a target="_blank" href={props.liveLink} className="row proj-img">
                            <img width={200} height={100} src={props.img} alt="" />
                        </a>
                        <div className="row"></div>
                    </div>
                    <div className="col-lg-5 col-xl-6 col-12 ms-lg-4 me-lg-auto">
                        <div className="row proj proj-tipo">{props.tipo}</div>
                        <a target="_blank" href={props.liveLink} className="row proj-title no-dec">{props.title}</a>
                        <div className="row proj proj-desc">{props.descricao}</div>
                        <div className="row proj proj-stack mt-4">{props.stack}</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container w-75 mb-5 mt-5 resp-proj">
                <div className="row">
                    <div className="col-lg-5 col-xl-6 col-12 me-lg-4 ms-auto">
                        <div className="row proj-l proj-tipo">{props.tipo}</div>
                        <a target="_blank" href={props.liveLink} className="row proj-l proj-title no-dec">{props.title}</a>
                        <div className="row proj-l proj-desc">{props.descricao}</div>
                        <div className="row proj-l proj-stack mt-4">{props.stack}</div>
                    </div>
                    <div className="col-lg-6 col-xl-5 col-12 me-auto">
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