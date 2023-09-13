import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

function SkillsGrid(props){
return(
    <ImageList sx={{ width: "40vh", height: "fit-content" }} cols={4} >
      {props.array.map((item) => (
        <ImageListItem key={item.img}>
          <img
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