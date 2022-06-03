import React from "react";

function TextInput(props) {

    return (
        <div className="text-input">
            <label>
                {props.text}:
            </label>
            <input type="text" className={props.innerText} onChange={(e) => props.handler(e.target.value)} value={props.innerText} disabled={props.disabled || false}/>
        </div>
    );
}

export default TextInput;