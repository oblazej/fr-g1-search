import { useDispatch } from "react-redux";
import { addElement } from "../../features/SelectedElements";
import elements from "../../constants/elements";

function ElementInput(props) {
    //try using a hook on V this
    const dispatch = useDispatch();
    const elementsOptions = elements.map((element) => <option value={element[0]} key={element[1]}>{element[1]}</option>)

    const elementSelectionHandle = (e) => {
        dispatch(addElement(e.target.value));
    }

    return (
        <div>
            <select name="element"
                value="default"
                id="element"
                onChange={elementSelectionHandle}>
                <option disabled value="default">
                    {props.placeholderText}
                </option>
                {elementsOptions}
            </select>
        </div>
    );
}

export default ElementInput;
//check if you can nest label in select
//label "for" doesnt work?