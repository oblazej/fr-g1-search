import React, { useState, useEffect, useRef } from "react";
import ColorInput from "../color-input/ColorInput";
import "./ColorRangeSelection.css";

function ColorRangeSelection(props) {
    const butt = useRef(null);
    const button = useRef(null);
    const [firstColor, setFirstColor] = useState(null);
    const [secondColor, setSecondColor] = useState(null);

    useEffect(() => {
        if(firstColor, secondColor) {
            butt.current.clearSelect();
            button.current.clearSelect();
            setFirstColor(null);
            setSecondColor(null);
        }
    });

    return (
        <div className="color-range-selection">
            {props.children}
            <ColorInput colorOrder="primaryRanges" placeholderText="select first color" type="range" handler={setFirstColor} ref={butt}/>
            <ColorInput colorOrder="primaryRanges" placeholderText="select second color" type="range" handler={setSecondColor} ref={button}/>
        </div>
    );
}

export default ColorRangeSelection;