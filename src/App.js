import { useState, useEffect } from "react";

// Context
import PalettesContext from "./palettesContext";

// Components
import Palette from "./components/Palette";
import ColorsBox from "./components/ColorsBox";

// Model
import palettes from "./model/palettes";

// helper
import { hexToHSL } from "./helperFunction/colors";

function App() {
  const [appPalettes, setAppPalettes] = useState([]);

  useEffect(() => {
    let _appPalettes = palettes;
    let newPalettes = [];
    _appPalettes.forEach((palette) => {
      let newColors = [];
      palette.colors.forEach((colorObj) => {
        let { h, s, l } = hexToHSL(colorObj.color);
        let newColorsObj = {
          name: colorObj.name,
          color: {
            hex: colorObj.color,
            hsl: {
              values: { h, s, l },
              css: `hsl(${h}deg,${s}%,${l}%)`,
            },
          },
        };
        newColors.push(newColorsObj);
      });
      palette.colors = newColors;
      newPalettes.push(palette);
    });
    // console.log(newPalettes);
    setAppPalettes(newPalettes);
    return;
  }, []);

  return (
    <PalettesContext.Provider value={appPalettes}>
      <div className="App">
        <ColorsBox/>
        {/* <Palette palettes={palettes}/> */}
      </div>
    </PalettesContext.Provider>
  );
}

export default App;
