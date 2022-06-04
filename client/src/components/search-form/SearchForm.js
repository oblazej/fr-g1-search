import React, { useState } from 'react';
import { useSelector } from "react-redux";
import SingleColorSelection from '../../components/single-color-selection/SingleColorSelection';
import ElementsSelection from '../elements-selection/ElementsSelection';
import TextInput from '../../components/text-input/TextInput';
import ColorRangeSelection from '../color-range-selection/ColorRangeSelection';
import "./SearchForm.css";
import Axios from "axios";

function SearchForm() {
    const selectedColors = useSelector((state) => state.selectedColors.value);
    const selectedElements = useSelector((state) => state.selectedElements.value);
    const [schemeName, setSchemeName] = useState("");
    const [schemeCreator, setSchemeCreator] = useState("");

    const sendReq = (e) => {    
        e.preventDefault();
        Axios.post("http://localhost:3001/colorschemes", {
          name: schemeName,
          creator: schemeCreator,
          primaryColors: selectedColors.primaryColors,
          secondaryColors: selectedColors.secondaryColors,
          tertiaryColors: selectedColors.tertiaryColors,
          primaryRanges: selectedColors.primaryRanges,
          secondaryRanges: selectedColors.secondaryRanges,
          tertiaryRanges: selectedColors.tertiaryRanges,
          elements: selectedElements
        }).then(() => {
            console.log("success")
        })
    }


    return (
        <form id="search-form">
            <h2 className="search-form-title">Fill in:</h2>
            <div className="single-color-selection-div">
                <SingleColorSelection colors="primaryColors">
                    <label>primary color:</label>
                </SingleColorSelection>
                <SingleColorSelection colors="secondaryColors">
                    <label>secondary color:</label>
                </SingleColorSelection>
                <SingleColorSelection colors="tertiaryColors">
                    <label>tertiary color:</label>
                </SingleColorSelection>
            </div>
            <div className="color-range-selection-div">
                <ColorRangeSelection colors="primaryRanges">
                    <label>primary color range:</label>
                </ColorRangeSelection>
                <ColorRangeSelection colors="secondaryRanges">
                    <label>secondary color range:</label>
                </ColorRangeSelection>
                <ColorRangeSelection colors="tertiaryRanges">
                    <label>tertiary color range:</label>
                </ColorRangeSelection>
            </div>
            <div className="element-and-information">
                <ElementsSelection>
                    <label>Element:</label>
                </ElementsSelection>
                <TextInput text="Name of the scheme" handler={setSchemeName}/>
                <TextInput text="Your IGN" handler={setSchemeCreator}/>
            </div>
            <button className="search-submit">Load dragon preview</button>
            <button className="search-submit" onClick={sendReq}>Submit</button>
        </form>
    )
}

export default SearchForm;