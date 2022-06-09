function DragonDisplayColor(props) {

    return (
      <div className="dragon-display-color-div">
      <p className="dragon-display-color-description">
          {props.description}
          </p>
          <div className={[props.color, "dragon-color-div"].join(" ")}>{props.color}</div>
      </div>
    );
  }

  export default DragonDisplayColor;