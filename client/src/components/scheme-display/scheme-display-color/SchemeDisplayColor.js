import { useState } from "react";

function SchemeDisplayColor(props) {
      const [isHovering, setIsHovering] = useState(false);
      const [recentColor, setRecentColor] = useState("");
      const [isSelected, setIsSelected] = useState(false);

      const handleMouseOver = () => {
            setIsHovering(true);
            setRecentColor(props.recentColor);
            props.setPrev(props.color);
      }

      const handleMouseOut = () => {
            setIsHovering(false);
            if (!isSelected) {
                  props.setPrev(recentColor);
            }
      }

      const handleOnClick = (e) => {
            setIsSelected(true);
            props.setPrev(props.color);
            props.setRecentColor(props.color);
      }

      return (
            <div className="scheme-display-color-container">
                  {props.recentColor === props.color ?
                        <div className={[props.color, "scheme-display-color-div", "scheme-display-color-selected"].join(" ")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick}></div> :
                        <div className={[props.color, "scheme-display-color-div"].join(" ")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick}></div>}
                  {isHovering && <div className="scheme-color-description"><p>{props.color}</p></div>}
            </div>
      );
}

export default SchemeDisplayColor;