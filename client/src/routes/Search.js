import React from 'react';
import ColorInput from '../features/color-input/ColorInput';
import ElementInput from '../features/element-input/ElementInput';
import TextInput from '../features/text-input/TextInput';

function Search() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Add a color scheme</h2>
        <div>
        <form>
<ColorInput colorOrder="primary"/>
<ColorInput colorOrder="secondary"/>
<ColorInput colorOrder="tertiary"/>
<ElementInput />
<TextInput text="Name of the scheme"/>
<TextInput text="Your IGN"/>
<p>Load the dragon preview</p><p>Confirm</p>
        </form>
        </div>
      </main>
    );
  }


export default Search;