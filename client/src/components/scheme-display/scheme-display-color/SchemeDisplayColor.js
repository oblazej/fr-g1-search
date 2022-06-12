import { useState } from "react";

function SchemeDisplayColor(props) {
      const [isHovering, setIsHovering] = useState(false);

      const handleMouseOver = () => {
            setIsHovering(true);
      }

      const handleMouseOut = () => {
            setIsHovering(false);
      }

    return (
            <div className="scheme-display-color-container">
          <div className={[props.color, "scheme-display-color-div"].join(" ")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></div>
          {isHovering && <div className="scheme-color-description"><p>{props.color}</p></div>}
          </div>
    );
  }

  export default SchemeDisplayColor;