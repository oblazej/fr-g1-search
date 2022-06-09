function SchemeDisplayColor(props) {

    return (
          <div className={[props.color, "scheme-display-color-div"].join(" ")}></div>
    );
  }

  export default SchemeDisplayColor;