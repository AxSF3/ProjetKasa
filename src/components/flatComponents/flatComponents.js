import React from "react";
import "./flatComponents.css";

function flatComponents({id, image, titre}) {
    return(
        <div className="tuile" id={id}>
            <img className="tuile-image" src={image} alt="Tuile"/>
            <div className="tuile-sombre"></div>
            <span className="tuile-titre">{titre}</span>
        </div>
    );
}

export default flatComponents;