import React from 'react';
import ColorBox from "./components/ColorBox_Hook";
import { ColorProvider } from "./context/color";
import SelectColors from "./components/SelectColors_Class";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox/>
      </div>
    </ColorProvider>
  );
};

export default App;
