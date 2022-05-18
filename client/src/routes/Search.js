import React from 'react';
import ColorInput from '../features/color-input/ColorInput';
import ElementInput from '../features/element-input/ElementInput';
import TextInput from '../features/text-input/TextInput';
import { motion } from "framer-motion";
import "./Search.css";
import dragon_placeholder from "../static/img/dragon_placeholder.png"

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
<ColorInput colorOrder="primary" placeholderText="select to add"/>
<ColorInput colorOrder="secondary" placeholderText="select to add"/>
<ColorInput colorOrder="tertiary" placeholderText="select to add"/>
<ElementInput placeholderText="select to add"/>
<TextInput text="Name of the scheme"/>
<TextInput text="Your IGN"/>
<p>Load the dragon preview</p><p>Confirm</p>
        </form>
        </div>
      </motion.div>
    );
  }


export default Search;