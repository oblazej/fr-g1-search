import React from 'react';
import SingleColorSelection from '../../components/single-color-selection/SingleColorSelection';
import ColorInput from "../../components/color-input/ColorInput";
import ElementInput from '../../components/element-input/ElementInput';
import TextInput from '../../components/text-input/TextInput';
import ColorRangeSelection from '../color-range-selection/ColorRangeSelection';

function SearchForm() {

    return (
        <form>
            <h2>Fill in:</h2>
            <SingleColorSelection colors="primaryColors">
            <span>primary color:</span>
            </SingleColorSelection>
            <SingleColorSelection colors="secondaryColors">
            <span>secondary color:</span>
            </SingleColorSelection>
            <SingleColorSelection colors="tertiaryColors">
            <span>tertiary color:</span>
            </SingleColorSelection>
            <ColorRangeSelection colors="primaryRanges">
            <span>primary color range:</span>
            </ColorRangeSelection>
        {/* <ColorInput placeholderText="select to add"/>
        <ColorInput placeholderText="select to add"/>
        <p>secondary color range:</p>
        <ColorInput placeholderText="select to add"/>
        <ColorInput placeholderText="select to add"/>
        <p>tertiary color range:</p>
        <ColorInput placeholderText="select to add"/>
        <ColorInput placeholderText="select to add"/>
        <ElementInput placeholderText="select to add"/>
        <TextInput text="Name of the scheme"/>
        <TextInput text="Your IGN"/> */}
            <p>Load the dragon preview</p><p>Confirm</p>
        </form>
    )
}

export default SearchForm;