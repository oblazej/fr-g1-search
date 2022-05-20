import React from 'react';
import ColorInput from '../features/color-input/ColorInput';
import ElementInput from '../features/element-input/ElementInput';
import TextInput from '../features/text-input/TextInput';
import { motion } from "framer-motion";
import "./Search.css";
import dragon_placeholder from "../assets/images/dragon_placeholder.png";
import SingleColorSelection from '../features/single-color-selection/SingleColorSelection';

function Search() {
    return (
      <motion.div id="search-div"
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       exit={{opacity: 0}}>
        <h2 className="search-title">Add a color scheme</h2>
        <div className="flexit">
          <div>
            <h2 className="preview-title">Preview</h2>
          <div className="preview-frame">
            <img src={dragon_placeholder} alt="dragon placeholder"/>
          </div>
          </div>
        <form>
<h2>Fill in:</h2>
<SingleColorSelection colors="primaryColors">
  <ColorInput colorOrder="primary" labelText="primary color: " placeholderText="select to add"/>
</SingleColorSelection>
{/* <SingleColorSelection>
<ColorInput colorOrder="secondary" labelText="secondary color: " placeholderText="select to add"/>
</SingleColorSelection>
<SingleColorSelection>
<ColorInput colorOrder="tertiary" labelText="tertiary color: " placeholderText="select to add"/>
</SingleColorSelection> */}

{/* <p>primary color range:</p>
<ColorInput placeholderText="select to add"/>
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
        </div>
      </motion.div>
    );
  }


export default Search;