import react, { useState, useEffect } from "react";
// Model
import palettes from "./model/palettes";
// helper
import { hexToHSL } from "./helperFunction/colors";

// PalettesContext
const PalettesContext = react.createContext();
PalettesContext.displayName = "PalettesContext";

function PalettesProvider(props) {
  const [palettesData, setPalettesData] = useState([]);

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
    setPalettesData(newPalettes);
    return;
  }, []);

  return (
    <PalettesContext.Provider value={{ palettesData, setPalettesData }}>
      {props.children}
    </PalettesContext.Provider>
  );
}

export { PalettesContext, PalettesProvider };

// SliderContext
const SliderContext = react.createContext();
SliderContext.displayName = "SliderContext";

function SliderProvider(props) {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <SliderContext.Provider value={{ sliderValue, setSliderValue }}>
      {props.children}
    </SliderContext.Provider>
  );
}
export { SliderContext, SliderProvider };

// ColorFormatContext
const ColorFormatContext = react.createContext();
ColorFormatContext.displayName = "ColorFormatContext";

function ColorFormatProvider(props) {
  const [colorFormat, setColorFormat] = useState("hsl");

  return (
    <ColorFormatContext.Provider value={{ colorFormat, setColorFormat }}>
      {props.children}
    </ColorFormatContext.Provider>
  );
}
export { ColorFormatContext, ColorFormatProvider };

function Providers(props) {
  return (
    <PalettesProvider>
      <ColorFormatProvider>
        <SliderProvider>{props.children}</SliderProvider>
      </ColorFormatProvider>
    </PalettesProvider>
  );
}

export { Providers };
