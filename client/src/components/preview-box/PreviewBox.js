import React from "react";
import dragon_placeholder from "../../assets/images/dragon_placeholder.png";

function PreviewBox() {
    return (
        <div>
            <h2 className="preview-title">Preview</h2>
            <div className="preview-frame">
                <img className="preview-image" src={dragon_placeholder} alt="dragon placeholder" />
            </div>
        </div>
    )
}

export default PreviewBox;