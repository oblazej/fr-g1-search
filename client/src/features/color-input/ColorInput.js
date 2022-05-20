import React from "react";
import colors from "../../constants/colors";
import './ColorInput.css';
import { useDispatch } from "react-redux";
import { addColor } from "../../features/SelectedColors";

function ColorInput (props) {
    const colorsPaletteOptions = colors.map((color) => <option value={color[0]} key={(props.colorOrder + color[1])} className={color[1]}>{color[1]}</option>)
    const dispatch = useDispatch();
    return(<div>
        <label>{props.labelText}</label>
        <select name={props.colorOrder} id={props.colorOrder} onChange={(e) => {dispatch(addColor(e.target.value))}}>
            <option selected disabled>{props.placeholderText}</option>
            {colorsPaletteOptions}
        </select>
        </div>
    ); 
}

export default ColorInput;
//check if you can nest label in select
//label "for" doesnt work?