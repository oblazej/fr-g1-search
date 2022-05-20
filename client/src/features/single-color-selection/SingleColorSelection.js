import React from "react";
import colors from "../../constants/colors";
import "./SingleColorSelection.css";
import { useSelector } from "react-redux";

function SingleColorSelection (props) {

    const selectedColors = useSelector((state) => state[props.colors].value);

    return(
        <div className="single-color-selection">
            {props.children}
            {selectedColors.map((color) => {
                return <div className={[colors[color][1], "selected-color-div"].join(" ")}>{colors[color][1]}</div>
            })}
        </div>
    ); 
}

export default SingleColorSelection;