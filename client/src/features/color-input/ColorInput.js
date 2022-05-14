import React from "react";
import colors from "../../app/colors";
import './ColorInput.css';

function ColorInput (props) {
    const colorsPaletteOptions = colors.map((color) => <option value={color[0]} key={(props.colorOrder + color[1])} className={color[1]}>{color[1]}</option>)

    return(<div>
        <label>{props.colorOrder} color: </label>
        <select name={props.colorOrder} id={props.colorOrder}>
            {colorsPaletteOptions}
        </select>
        </div>
    ); 
}

export default ColorInput;
//check if you can nest label in select
//label "for" doesnt work?