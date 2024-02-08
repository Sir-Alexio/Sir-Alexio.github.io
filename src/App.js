import "./styles.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AppBar, Tab, Tabs } from "@mui/material";
import { useMemo } from "react";

import Counters from "./containers/CounterContainer";
import About from "./views/About/index";
import Homepage from "./views/Home/index";
import NotFound from "./views/NotFound/index";

const appBarColor = "#0f1116";

function App() {
  const location = useLocation();

  const memoLocation = useMemo(() => location, [location]);

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: appBarColor }}>
        <Tabs>
          <Tab
            label="About"
            component={Link}
            to="/about"
            style={{
              color: "white",
              backgroundColor:
                memoLocation.pathname === "/about" ? "#1a1d23" : "transparent",
            }}
          />
          <Tab
            label="Counters"
            component={Link}
            to="/counters"
            style={{
              color: "white",
              backgroundColor:
                memoLocation.pathname === "/counters"
                  ? "#1a1d23"
                  : "transparent",
            }}
          />
        </Tabs>
      </AppBar>

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
