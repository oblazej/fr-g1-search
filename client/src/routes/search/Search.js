import React from 'react';
import { motion } from "framer-motion";
import ColorInput from "../../components/color-input/ColorInput";
import ElementInput from '../../components/element-input/ElementInput';
import TextInput from '../../components/text-input/TextInput';
import SingleColorSelection from '../../components/single-color-selection/SingleColorSelection';
import dragon_placeholder from "../../assets/images/dragon_placeholder.png";
import "./Search.css";

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