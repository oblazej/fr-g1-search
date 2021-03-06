import SchemeDisplayColor from "../scheme-display-color/SchemeDisplayColor";

function SchemeDisplayColors(props) {

    //use context?
    const elements = props.colors.map((color) => <SchemeDisplayColor key={color} color={color} setPrev={props.setPrev} recentColor={props.recentColor} setRecentColor={props.setRecentColor}/>);

    return (
        <>
        <h2 className="scheme-header">{props.title}</h2>
        <div className="testit">
            {(props.colors.length > 0 && props.colors.length !== 177) ? elements : "Any color."}
        </div>
        </>
    );
  }

  export default SchemeDisplayColors;