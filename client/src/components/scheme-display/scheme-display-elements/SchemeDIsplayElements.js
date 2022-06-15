import SchemeDisplayElement from "../scheme-display-element/SchemeDisplayElement";

function SchemeDisplayElements(props) {

    const elements = props.elements.map((element) => <SchemeDisplayElement key={element} element={element} setPrev={props.setPrev}/>);

    return (
        <>
        <h2 className="scheme-header">{props.title}</h2>
        <div className="testit">
            {(props.elements.length > 0 && props.elements.length !== 11) ? elements : "Any color."}
        </div>
        </>
    );
  }

  export default SchemeDisplayElements;