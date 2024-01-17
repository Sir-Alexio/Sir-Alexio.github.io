import './App.css';
import CounterContainer from './containers/CounterContainer';
import {Routes, Route, Link} from 'react-router-dom';

import Counters from './containers/CounterContainer';
import About from './views/About/index';
import Homepage from './views/Home/index';
import NotFound from './views/NotFound/index';

function App() {
  return (
    <>
    <header>
      <Link to={'/about'}>About</Link>
      <Link to={'/counters'}>Counters</Link>
    </header>
    <Routes>
      <Route path='/' element ={<Homepage />}></Route>
      <Route path='/about' element ={<About />}></Route>
      <Route path='/counters' element ={<Counters />}></Route>
      <Route path='*' element ={<NotFound />}></Route>
    </Routes>
    </>
    // <div className="App">
    //   <div className="App-header">
    //     <CounterContainer />
    //   </div>
    // </div>
  );
}

export default App; 
