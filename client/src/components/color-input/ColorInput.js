import React from "react";
import { useDispatch } from "react-redux";
import colors from "../../constants/colors";
import { addColor } from "../../features/SelectedColors";
import './ColorInput.css';

function ColorInput(props) {
    //try using a hook on V this
    const colorsPaletteOptions = colors.map((color) => <option value={color[0]} key={(props.colorOrder + color[1])} className={color[1]}>{color[1]}</option>);
    const dispatch = useDispatch();
    const onClick = function (e) {
        dispatch(addColor({color: e.target.value, colorOrder: props.colorOrder}));
        e.target.value = "default";
    }

    return (
        <div>
            <label>
                {props.labelText}
            </label>
            <select name={props.colorOrder} defaultValue="default"
                id={props.colorOrder}
                onChange={onClick}>
                <option disabled value="default">
                    {props.placeholderText}
                </option>
                {colorsPaletteOptions}
            </select>
        </div>
    );
}

export default ColorInput;
//check if you can nest label in select
//label "for" doesnt work?
