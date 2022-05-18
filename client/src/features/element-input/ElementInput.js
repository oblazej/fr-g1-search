import React from "react";
import elements from "../../app/elements";

function ElementInput (props) {
    const elementsOptions = elements.map((element) => <option value={element[0]} key={element[1]}>{element[1]}</option>)

    return(<div>
        <label>element: </label>
        <select name="element" id="element">
            <option>{props.placeholderText}</option>
            {elementsOptions}
        </select>
        </div>
    ); 
}

export default ElementInput;
//check if you can nest label in select
//label "for" doesnt work?