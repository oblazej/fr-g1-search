import dragon_placeholder from "../../assets/images/dragon_placeholder.png";
function PreviewBox(props) {

    return (
        <div>
            <h2 className="preview-title">{props.title}</h2>
            <div className="preview-frame">
                <img className="preview-image" src={!props.dragonImage ? dragon_placeholder : props.dragonImage} alt="dragon placeholder" />
            </div>
        </div>
    )
}

export default PreviewBox;