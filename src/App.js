import Palette from './components/Palette';
import palettes from './model/palettes';

function App() {
  return (
    <div className="App">
      <Palette palettes={palettes}/>
    </div>
  );
}

export default App;
