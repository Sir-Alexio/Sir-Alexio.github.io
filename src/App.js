import './styles.css'
import {Routes, Route, Link, NavLink,useLocation } from 'react-router-dom';
import { AppBar, Tab, Tabs} from '@mui/material';
import Counters from './containers/CounterContainer';
import About from './views/About/index';
import Homepage from './views/Home/index';
import NotFound from './views/NotFound/index';
import LoginContainer from './containers/LoginContainer'

function App() {
  const location = useLocation();

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#0f1116' }}>
        <Tabs style={{ backgroundColor: '#0f1116' }}>
          <Tab
            label="About"
            component={Link}
            to="/about"
            style={{
              color: 'white',
              backgroundColor: location.pathname === '/about' ? '#1a1d23' : 'transparent',
            }}
          />
          <Tab
            label="Counters"
            component={Link}
            to="/counters"
            style={{
              color: 'white',
              backgroundColor: location.pathname === '/counters' ? '#1a1d23' : 'transparent',
            }}
          />
          <Tab
            label="Login"
            component={Link}
            to="/login"
            style={{
              color: 'white',
              backgroundColor: location.pathname === '/login' ? '#1a1d23' : 'transparent',
            }}
          />
        </Tabs>
      </AppBar>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App; 
