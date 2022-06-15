import { useState } from "react";

function SchemeDisplayElement(props) {
      const [isHovering, setIsHovering] = useState(false);

      const handleMouseOver = () => {
            setIsHovering(true);
            props.setPrev(props.element);
      }

      const handleMouseOut = () => {
            setIsHovering(false);
      }

    return (
            <div className="scheme-display-color-container">
          <div className={[`e-${props.element}`, "scheme-display-color-div"].join(" ")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></div>
          {isHovering && <div className="scheme-color-description"><p>{props.element}</p></div>}
          </div>
    );
  }

  export default SchemeDisplayElement;