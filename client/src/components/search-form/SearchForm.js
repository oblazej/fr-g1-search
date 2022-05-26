import React from 'react';
import SingleColorSelection from '../../components/single-color-selection/SingleColorSelection';
import ElementsSelection from '../elements-selection/ElementsSelection';
import TextInput from '../../components/text-input/TextInput';
import ColorRangeSelection from '../color-range-selection/ColorRangeSelection';
import "./SearchForm.css";

function SearchForm() {

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
            <TextInput text="Name of the scheme" />
            <TextInput text="Your IGN" />
            </div>
        </form>
    )
}

export default SearchForm;