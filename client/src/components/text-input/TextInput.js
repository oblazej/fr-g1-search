import React, { useState } from "react";

function TextInput(props) {
    const [text, setText] = useState("");

    return (
        <div>
            <label>
                {props.text}:
            </label>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
        </div>
    );
}

export default TextInput;