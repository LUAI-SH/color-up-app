import { useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Context
import { PalettesContext } from "./appContexts";

// Components
import Palette from "./components/Palette";
import Home from "./components/Home";
import CreatePalette from "./components/CreatePalette";

function App() {
  const { palettesData } = useContext(PalettesContext);

  const location = useLocation();

  const findPaletteById = (id) => {
    return palettesData.find((palette) => palette.id === id);
  };

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/create-palette" render={() => <CreatePalette />} />
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
