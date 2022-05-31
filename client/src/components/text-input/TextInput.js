import React, { useState } from "react";

function TextInput(props) {
    const [text, setText] = useState("");

    return (
        <div className="text-input">
            <label>
                {props.text}:
            </label>
            <input type="text" className={props.innerText} onChange={(e) => setText(e.target.value)} value={props.innerText} disabled={props.disabled || false}/>
        </div>
    );
}

export default TextInput;