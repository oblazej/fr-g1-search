import React, { useState } from "react";
import TextInput from "../../components/text-input/TextInput";
import { useDispatch } from "react-redux";
import { addValue } from "../../features/SoldDragon";
import Loader from "../loader/Loader";
import Axios from "axios";
import colors from "../../constants/colors-map";
import elements from "../../constants/elements-map";

function SellForm() {
  const dispatch = useDispatch();

  const [dragonID, setDragonID] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [tertiaryColor, setTertiaryColor] = useState("");
  const [element, setElement] = useState("");
  const [sex, setSex] = useState("");
  const [price, setPrice] = useState("");
  const [owner, setOwner] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loadDragonPreview = (e) => {
    setIsLoading(true);
    e.preventDefault();
    Axios.get(`http://localhost:3001/dragons/load/${dragonID}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setPrimaryColor(response.data.bio[0]);
        setSecondaryColor(response.data.bio[1]);
        setTertiaryColor(response.data.bio[2]);
        setElement(response.data.bio[5]);
        setSex(response.data.sex);
        dispatch(addValue({ type: "img", val: `https://www1.flightrising.com${response.data.img}` }));
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

  const searchColorScheme = (e) => {
    e.preventDefault();
    setIsLoading(true);
    Axios.get(`http://localhost:3001/colorschemes/${colors[primaryColor]}.${colors[secondaryColor]}.${colors[tertiaryColor]}.${elements[element]}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setIsLoading(false);
      });
  }

  const sellDragon = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/dragons", {
      id: dragonID,
      owner: owner,
      price: price,
      sex: sex,
      primaryColor: colors[primaryColor],
      secondaryColor: colors[secondaryColor],
      tertiaryColor: colors[tertiaryColor],
      element: elements[element]
    }).then(() => {
        console.log("success")
    })
  }

  return (
    <form id="sell-form">
      <h2 className="search-form-title">Fill in:</h2>
      <div className="text-input">
      <label>ID:</label>
  <input type="number" min="0" onChange={(e) => { setDragonID(e.target.value) }} />
  </div>
      <button className="search-submit" onClick={loadDragonPreview}>Load the dragon</button>
      <button className="search-submit" onClick={searchColorScheme}>Check schemes</button>  {isLoading ? <Loader /> : null}
      <div className="sell-dragon">
      <TextInput text="primary color" innerText={primaryColor} disabled={true} />
        <TextInput text="secondary color" innerText={secondaryColor} disabled={true} />
        <TextInput text="tertiary color" innerText={tertiaryColor} disabled={true} />
        </div>
        <div className="sell-dragon">
        <TextInput text="price" handler={setPrice}/>
      <TextInput text="element" innerText={element} disabled={true} />
      <TextInput text="sex" innerText={sex} disabled={true} />
      </div>
      <div className="sell-owner">
      <TextInput text="Your IGN" handler={setOwner}/>
      </div>
      <button className="search-submit" onClick={sellDragon}>Submit</button>
    </form>
  )
}

export default SellForm;