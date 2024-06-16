import logo from './logo.svg';
import './App.css';
import Weatherapp from './components/Weatherapp';
import Countdown from './components/Countdown';
import { Map } from './components/Maps';

function App() {
  return (
    <div className="App">
      {/* <Map/> */}
      {/* <Countdown/> */}
      <Weatherapp/>
    </div>
  );
}

export default App;
