import DragonLineart from "../../assets/images/dragon_vector/DragonLineart";
import DragonBase from "../../assets/images/dragon_vector/DragonBase";
import DragonWings from "../../assets/images/dragon_vector/DragonWings";
import DragonEye from "../../assets/images/dragon_vector/DragonEye";
import DragonBelly from "../../assets/images/dragon_vector/DragonBelly";

function PreviewBox(props) {

    return (
        <div>
            <h2 className="preview-title">{props.title}</h2>
            <div className="preview-frame">
                <DragonBase color={props.primaryColor} />
                <DragonWings color={props.secondaryColor} />
                <DragonBelly color={props.tertiaryColor} />
                <DragonEye color={`e-${props.element}`} />
                <DragonLineart />
            </div>
        </div>
    )
}

export default PreviewBox;