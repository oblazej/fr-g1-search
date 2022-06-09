import { useSelector } from "react-redux";
import colors from "../../constants/colors";
import SelectedColor from "../selected-color/SelectedColor";
import ColorInput from "../../components/color-input/ColorInput";
import "./SingleColorSelection.css";

function SingleColorSelection(props) {
    const selectedColors = useSelector((state) => state.selectedColors.value[props.colors]);

    return (
        <div className="single-color-selection">
            {props.children}
            <ColorInput colorOrder={props.colors} placeholderText="select to add" type="single"/>
            {selectedColors.map((color) => {
                return <SelectedColor key={color} colorID={color} colorOrder={props.colors} color={colors[color][1]}/>
            })}
        </div>
    );
}

export default SingleColorSelection;