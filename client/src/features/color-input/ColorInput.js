import React from "react";
import colors from "../../app/colors";
import './ColorInput.css';

function ColorInput (props) {
    const colorsPaletteOptions = colors.map((color) => <option value={color[0]} key={(props.colorOrder + color[1])} className={color[1]}>{color[1]}</option>)

    return(<div>
        <label>{props.labelText}</label>
        <select name={props.colorOrder} id={props.colorOrder} onChange={() => console.log("klik")}>
            <option>{props.placeholderText}</option>
            {colorsPaletteOptions}
        </select>
        </div>
    ); 
}

export default ColorInput;
//check if you can nest label in select
//label "for" doesnt work?