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
            if(!isSelected) {
                  props.setPrev(recentColor);
            }
      }

      const handleOnClick = (e) => {
            setIsSelected(true);
            e.target.classList.toggle("scheme-display-color-selected");
      }

    return (
            <div className="scheme-display-color-container">
          <div className={[props.color, "scheme-display-color-div"].join(" ")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick}></div>
          {isHovering && <div className="scheme-color-description"><p>{props.color}</p></div>}
          </div>
    );
  }

  export default SchemeDisplayColor;