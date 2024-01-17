// import './App.css';
import './styles.css'
import {Routes, Route, Link} from 'react-router-dom';
import { AppBar, Tab, Tabs, colors } from '@mui/material';

import Counters from './containers/CounterContainer';
import About from './views/About/index';
import Homepage from './views/Home/index';
import NotFound from './views/NotFound/index';

function App() {
  return (
    <>
        <header>
          <Link to="/about">About</Link>
          <Link to="/counters">Counters</Link>
        </header>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/counters" element={<Counters />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    </>
  );
}

export default App; 
