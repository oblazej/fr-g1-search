import React, { useState } from "react";
import TextInput from '../../components/text-input/TextInput';
import Axios from "axios";

function SellForm() {

  const [dragonID, setDragonID] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [tertiaryColor, setTertiaryColor] = useState("");
  const [element, setElement] = useState("");

  const loadDragonPreview = (e) => {
    e.preventDefault();
    Axios.get(`http://localhost:3001/loaddragon/${dragonID}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setPrimaryColor(response.data.bio[0]);
        setSecondaryColor(response.data.bio[1]);
        setTertiaryColor(response.data.bio[2]);
        setElement(response.data.bio[5]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <form id="sell-form">
      <input type="number" min="0" onChange={(e) => { setDragonID(e.target.value) }} />
      <button className="search-submit" onClick={loadDragonPreview}>Load the dragon</button>
      <TextInput text="primary color" innerText={primaryColor} disabled={true} />
      <TextInput text="secondary color" innerText={secondaryColor} disabled={true} />
      <TextInput text="tertiary color" innerText={tertiaryColor} disabled={true} />
      <TextInput text="element" innerText={element} disabled={true} />
      <TextInput text="price" />
      <TextInput text="Your IGN" />
    </form>
  )
}

export default SellForm;