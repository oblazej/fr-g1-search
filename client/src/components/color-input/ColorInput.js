import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch } from "react-redux";
import colors from "../../constants/colors";
import { addColor } from "../../features/SelectedColors";
import './ColorInput.css';

const ColorInput = forwardRef((props, ref) => {
    //try using a hook on V this
    const [color, setColor] = useState("default");
    const colorsPaletteOptions = colors.map((color) => <option value={color[0]} key={(props.colorOrder + color[1])} className={color[1]}>{color[1]}</option>);
    const dispatch = useDispatch();
    useImperativeHandle(ref, () => ( {
        clearSelect() {
            setColor("default");
        }
    }));
    let colorSelectionHandle;

    if (props.type === "single") {
        colorSelectionHandle = function (e) {
            dispatch(addColor({ color: e.target.value, colorOrder: props.colorOrder }));
            setColor("default");

        }
    } else {
        colorSelectionHandle = function (e) {
            setColor(e.target.value);
            props.handler(e.target.value);
        }
    }

    return (
        <div>
            <select name={props.colorOrder} value={color}
                id={props.colorOrder}
                onChange={colorSelectionHandle}>
                <option disabled value="default">
                    {props.placeholderText}
                </option>
                {colorsPaletteOptions}
            </select>
        </div>
    );
})

export default ColorInput;
//check if you can nest label in select
//label "for" doesnt work?
