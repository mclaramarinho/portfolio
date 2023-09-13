import React from "react";

function Project(props){
    return(
        <div className="container w-75 mb-5 mt-5">
            <div className="row">
                <div className="col-lg-5 col-xl-4 col-12">
                    <div className="row"></div>
                    <div className="row">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="row"></div>
                </div>
                <div className="col-lg-7 col-xl-8 col-12">
                    <div className="row">{props.tipo}</div>
                    <div className="row">{props.descricao}</div>
                    <div className="row">{props.stack}</div>
                </div>
            </div>
        </div>
    )
}

export default Project;