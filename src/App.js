import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import PerentCounter from './views/PerentCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PerentCounter />
      </header>
    </div>
  );
}

export default App;
