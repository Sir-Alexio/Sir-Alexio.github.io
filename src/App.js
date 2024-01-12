import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterContainer />
      </header>
    </div>
  );
}

export default App;
