import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

function SkillsGrid(props){
return(
    <ImageList classes={"col-12"} sx={{ width: "max-content", height: "fit-content", margin:"0 auto" }} cols={props.cols} >
      {props.array.map((item) => (
        <ImageListItem key={item.img}  sx={{width: "7vh"}}>
          <img
            className={"mb-4"}
            src={item.imgSrc}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
)
}

export default SkillsGrid;