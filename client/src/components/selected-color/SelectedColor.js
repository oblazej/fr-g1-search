import React from "react";

function SelectedColor(props) {

    return (
            <div className={[props.color, "selected-color-div"].join(" ")}>{props.color}</div>
    );
}

export default SelectedColor;