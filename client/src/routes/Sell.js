import React from 'react';
import ColorInput from '../features/color-input/ColorInput';
import ElementInput from '../features/element-input/ElementInput';
import TextInput from '../features/text-input/TextInput';
//should this section autofill?
function Sell() {
    return (
      <main style={{ padding: "1rem 0" }}>
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
      </main>
    );
  }

  export default Sell;