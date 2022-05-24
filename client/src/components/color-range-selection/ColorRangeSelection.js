import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addColor } from "../../features/SelectedColors";
import ColorInput from "../color-input/ColorInput";
import SelectedRange from "../selected-range/SelectedRange";
import { useSelector } from "react-redux";
import "./ColorRangeSelection.css";

function ColorRangeSelection(props) {
    const dispatch = useDispatch();
    const selectedColors = useSelector((state) => state.selectedColors.value[props.colors]);
    const firstColorRef = useRef(null);
    const secondColorRef = useRef(null);
    const [firstColor, setFirstColor] = useState(null);
    const [secondColor, setSecondColor] = useState(null);

    useEffect(() => {
        if(firstColor && secondColor) {
            dispatch(addColor({ color: `${firstColor}-${secondColor}`, colorOrder: props.colors}));
            firstColorRef.current.clearSelect();
            secondColorRef.current.clearSelect();
            console.log(firstColor, secondColor)
            setFirstColor(null);
            setSecondColor(null);
        }
    }, [firstColor, secondColor, dispatch, props.colors]);

    return (
        <div className="color-range-selection">
            {props.children}
            <ColorInput colorOrder="primaryRanges" placeholderText="select first color" type="range" handler={setFirstColor} ref={firstColorRef}/>
            <ColorInput colorOrder="primaryRanges" placeholderText="select second color" type="range" handler={setSecondColor} ref={secondColorRef}/>
            {selectedColors.map((color) => {
                return <SelectedRange key={color} range={color} rangeIDs={color.split("-")} colorOrder={props.colors}/>
            })}
        </div>
    );
}

export default ColorRangeSelection;