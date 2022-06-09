import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColor } from "../../features/SelectedColors";
import ColorInput from "../color-input/ColorInput";
import SelectedRange from "../selected-range/SelectedRange";
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
            //game doesn't check if you choose the same color
            if(firstColor !== secondColor) {
                dispatch(addColor({ color: `${firstColor}-${secondColor}`, colorOrder: props.colors}));
            }
            firstColorRef.current.clearSelect();
            secondColorRef.current.clearSelect();
            setFirstColor(null);
            setSecondColor(null);
        }
    }, [firstColor, secondColor, dispatch, props.colors]);

    return (
        <div className="color-range-selection">
            {props.children}
            <ColorInput colorOrder={props.colors} placeholderText="select first color" type="range" handler={setFirstColor} ref={firstColorRef}/>
            <ColorInput colorOrder={props.colors} placeholderText="select second color" type="range" handler={setSecondColor} ref={secondColorRef}/>
            {selectedColors.map((color) => {
                return <SelectedRange key={color} range={color} rangeIDs={color.split("-")} colorOrder={props.colors}/>
            })}
        </div>
    );
}

export default ColorRangeSelection;