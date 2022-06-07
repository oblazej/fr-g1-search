import React from "react";
import {Link} from "react-router-dom";
import "./ListPreviewBox.css";
import dragon_placeholder from "../../assets/images/dragon_placeholder.png";

function ListPreviewBox(props) {

    return (
                  <Link to={`/dragons/${props.id}`}><div className="list-preview-frame">
                <img className="list-preview-image" src={dragon_placeholder} alt="dragon placeholder" />
                <p>#{props.id}</p>
                </div>
                </Link>
    )
}

export default ListPreviewBox;