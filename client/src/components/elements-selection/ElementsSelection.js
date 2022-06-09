import { useSelector } from "react-redux";
import ElementInput from '../../components/element-input/ElementInput';
import SelectedElement from "../selected-element/SelectedElement";
import elements from "../../constants/elements";
import "./ElementsSelection.css"

function ElementsSelection(props) {
    const selectedElements = useSelector((state) => state.selectedElements.value);

    return (
        <div className="elements-selection">
            {props.children}
            <ElementInput placeholderText="select to add"/>
            {selectedElements.map((element) => {
                return <SelectedElement key={element - 1} elementID={element} element={elements[element - 1][1]}/>
            })}
        </div>
    );
}

export default ElementsSelection;