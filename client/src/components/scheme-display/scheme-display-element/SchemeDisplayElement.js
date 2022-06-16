import { useState } from "react";

function SchemeDisplayElement(props) {
      const [isHovering, setIsHovering] = useState(false);
      const [recentElement, setRecentElement] = useState("");
      const [isSelected, setIsSelected] = useState(false);

      const handleMouseOver = () => {
            setIsHovering(true);
            setRecentElement(props.recentElement);
            props.setPrev(props.element);
      }

      const handleMouseOut = () => {
            setIsHovering(false);
            if (!isSelected) {
                  props.setPrev(recentElement);
            }
      }

      const handleOnClick = (e) => {
            setIsSelected(true);
            props.setPrev(props.element);
            props.setRecentElement(props.element);
      }


    return (
            <div className="scheme-display-color-container">
          {props.recentElement === props.element ? <div className={[`e-${props.element}`, "scheme-display-color-div", "scheme-display-color-selected"].join(" ")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick}></div> : <div className={[`e-${props.element}`, "scheme-display-color-div"].join(" ")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick}></div>}
          {isHovering && <div className="scheme-color-description"><p>{props.element}</p></div>}
          </div>
    );
  }

  export default SchemeDisplayElement;