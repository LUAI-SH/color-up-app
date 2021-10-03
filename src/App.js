import Palette from './components/Palette';
import palettes from './model/palettes';

function App() {
  return (
    <div className="App">
      <Palette palette={palettes[4]}/>
    </div>
  );
}

export default App;
