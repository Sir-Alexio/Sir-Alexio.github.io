import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import PerentCounterContainer from './containers/PerentCounterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterContainer />
      </header>
    </div>
  );
}

export default App; 
