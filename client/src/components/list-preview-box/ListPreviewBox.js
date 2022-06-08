import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./ListPreviewBox.css";
import dragon_placeholder from "../../assets/images/dragon_placeholder.png";

function ListPreviewBox(props) {

  const [ img, setImg ] = useState("");

  useEffect(() => {
    Axios.get(`http://localhost:3001/dragons/img/${props.id}`)
      .then(function (response) {
        setImg(`https://www1.flightrising.com${response.data.img}`)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);


  return (
    <Link to={`/dragons/${props.id}`}><div className="list-preview-frame">
      <img className="list-preview-image" src={img ? img : dragon_placeholder} alt="dragon placeholder" />
      <p>#{props.id}</p>
    </div>
    </Link>
  )
}

export default ListPreviewBox;