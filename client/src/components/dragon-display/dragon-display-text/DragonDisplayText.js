function DragonDisplayText(props) {

    return (
      <div className="dragon-display-text-div">
      <p className="dragon-display-text-description">
          {props.description}
          </p>
          <div className="dragon-text-div">{props.text}</div>
      </div>
    );
  }

  export default DragonDisplayText;