import React from "react";
import { useSelector } from "react-redux";
import colors from "../../constants/colors";
import SelectedColor from "../selected-color/SelectedColor";
import "./SingleColorSelection.css";

function SingleColorSelection(props) {
    const selectedColors = useSelector((state) => state.selectedColors.value[props.colors]);

    return (
        <div className="single-color-selection">
            {props.children}
            {selectedColors.map((color) => {
                return <SelectedColor key={color} colorID={color} colorOrder={props.colors} color={colors[color][1]}/>
            })}
        </div>
    );
}

export default SingleColorSelection;