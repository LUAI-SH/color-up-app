import Palette from './components/Palette';
import ColorsBox from './components/ColorsBox';

import palettes from './model/palettes';

function App() {
  return (
    <div className="App">
    <ColorsBox palettesData={palettes} />
      {/* <Palette palettes={palettes}/> */}
    </div>
  );
}

export default App;
