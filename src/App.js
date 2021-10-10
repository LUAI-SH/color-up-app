import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Context
// import { PalettesContext } from "./appContexts";

// Components
import Palette from "./components/Palette";
import Home from "./components/Home";

// Model
import palettes from "./model/palettes";

// helper
import { hexToHSL } from "./helperFunction/colors";

function App() {
  const [appPalettes, setAppPalettes] = useState([]);
  const location = useLocation();
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

  if (!appPalettes | (appPalettes.length === 0)) {
    return <h1>Loading</h1>;
  }

  // console.log("App:", appPalettes);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
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
        <Route render={() => <h3>404 - Not found</h3>} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
