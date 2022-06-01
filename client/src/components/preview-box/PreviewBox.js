import React from "react";
import dragon_placeholder from "../../assets/images/dragon_placeholder.png";
import { useSelector } from "react-redux";

function PreviewBox(props) {
    const dragonImage = useSelector((state) => state.soldDragon.value.img);

    return (
        <div>
            <h2 className="preview-title">Preview</h2>
            <div className="preview-frame">
                <img className="preview-image" src={props.type === "sell" && dragonImage !== "" ? dragonImage : dragon_placeholder} alt="dragon placeholder" />
            </div>
        </div>
    )
}

export default PreviewBox;