import React from 'react';
import { motion } from "framer-motion";
import ColorInput from '../../components/color-input/ColorInput';
import ElementInput from '../../components/element-input/ElementInput';
import TextInput from '../../components/text-input/TextInput';

//should this section autofill?
function Sell() {
    return (
      <motion.div id="sell-div"
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       exit={{opacity: 0}}>
        <h2>Sell a dragon</h2>
        <div>
        <form>
<TextInput text="ID"/>
{/* maybe number instead of text type? and refactor textinput to just input */}
<TextInput text="Gender"/>
{/* make this a select */}
<ColorInput colorOrder="primary"/>
<ColorInput colorOrder="secondary"/>
<ColorInput colorOrder="tertiary"/>
<ElementInput />
<TextInput text="Price"/>
<TextInput text="Your IGN"/>
<p>Load the dragon preview</p><p>Confirm</p>
        </form>
        </div>
        </motion.div>
    );
  }

  export default Sell;