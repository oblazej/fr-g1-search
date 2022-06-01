import React, { useState } from "react";
import TextInput from "../../components/text-input/TextInput";
import { useDispatch } from "react-redux";
import { addValue } from "../../features/SoldDragon";
import Loader from "../loader/Loader";
import Axios from "axios";

function SellForm() {
  const dispatch = useDispatch();

  const [dragonID, setDragonID] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [tertiaryColor, setTertiaryColor] = useState("");
  const [element, setElement] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadDragonPreview = (e) => {
    setIsLoading(true);
    e.preventDefault();
    Axios.get(`http://localhost:3001/loaddragon/${dragonID}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setPrimaryColor(response.data.bio[0]);
        setSecondaryColor(response.data.bio[1]);
        setTertiaryColor(response.data.bio[2]);
        setElement(response.data.bio[5]);
        dispatch(addValue({type: "img", val: `https://www1.flightrising.com${response.data.img}`}));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        setIsLoading(false);
        // always executed
      });
  }

  return (
    <form id="sell-form">
      <input type="number" min="0" onChange={(e) => { setDragonID(e.target.value) }} />
      <button className="search-submit" onClick={loadDragonPreview}>Load the dragon</button> {isLoading ? <Loader /> : null}
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