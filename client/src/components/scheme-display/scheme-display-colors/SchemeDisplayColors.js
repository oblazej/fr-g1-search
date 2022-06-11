function SchemeDisplayColors(props) {

    return (
        <>
        <h2 className="scheme-header">{props.title}</h2>
        <div className="testit">
            {props.colors.length > 0 ? props.colors : "Any color."}
        </div>
        </>
    );
  }

  export default SchemeDisplayColors;