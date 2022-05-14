import React from "react";

function TextInput (props) {

    return(<div>
        <label>{props.text}: </label>
        <input type="text"></input>
        </div>
    ); 
}

export default TextInput;