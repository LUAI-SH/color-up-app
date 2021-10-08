import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// Context
import { PalettesContext } from "./appContexts";

// Components
import Palette from "./components/Palette";
import Home from "./components/Home";

// Model
import palettes from "./model/palettes";

// helper
import { hexToHSL } from "./helperFunction/colors";

function App() {
  const [appPalettes, setAppPalettes] = useState([]);

  const findPaletteById = (id) => {
    return appPalettes.find((palette) => palette.id === id);
  };

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

  if (!appPalettes | appPalettes.length === 0) {
    return <h1>Loading</h1>;
  }

  console.log('App:',appPalettes);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Home palettes={appPalettes} />}
      ></Route>
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette palette={findPaletteById(routeProps.match.params.id)} />
        )}
      ></Route>
    </Switch>
  );
}

export default App;
