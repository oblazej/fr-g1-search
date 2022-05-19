import React from "react";
import "./SingleColorSelection.css";

function SingleColorSelection (props) {

    return(
        <div className="single-color-selection">
            {props.children}
        </div>
    ); 
}

export default SingleColorSelection;