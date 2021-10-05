import Palette from './components/Palette';
import ColorsBox from './components/ColorsBox';

import palettes from './model/palettes';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

function App() {
  return (
    <div className="App">
    <Slider />
    <ColorsBox palettesData={palettes} />
      {/* <Palette palettes={palettes}/> */}
    </div>
  );
}

export default App;
