import "./styles.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AppBar, Tab, Tabs } from "@mui/material";
import Counters from "./containers/CounterContainer";
import About from "./views/About/index";
import Homepage from "./views/Home/index";
import NotFound from "./views/NotFound/index";
import LoginContainer from "./containers/LoginContainer";
import LoginReduxContainer from "./containers/ReduxLoginContainer";
import ReduxSuccess from "./views/Redux-Success/index";
import { useMemo } from "react";
import LoginFormik from "views/LoginFormik";
import FormikSuccess from "views/FormikSuccess";

function App() {
  const appBarColor = "#0f1116";
  const tabColor = "#1a1d23";

  const location = useLocation();

  const pathname = useMemo(() => location.pathname, [location]);

  const aboutTabStyle = useMemo(
    () => ({
      color: "white",
      backgroundColor: pathname === "/about" ? tabColor : "transparent",
    }),
    [pathname]
  );

  const countersTabStyle = useMemo(
    () => ({
      color: "white",
      backgroundColor: pathname === "/counters" ? tabColor : "transparent",
    }),
    [pathname]
  );

  const loginTabStyle = useMemo(
    () => ({
      color: "white",
      backgroundColor: pathname === "/login" ? tabColor : "transparent",
    }),
    [pathname]
  );
  const reduxTabStyle = useMemo(
    () => ({
      color: "white",
      backgroundColor: pathname === "/login-redux" ? tabColor : "transparent",
    }),
    [pathname]
  );
  const formikTabStyle = useMemo(
    () => ({
      color: "white",
      backgroundColor: pathname === "/login-formik" ? tabColor : "transparent",
    }),
    [pathname]
  );
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: appBarColor }}>
        <Tabs>
          <Tab
            label="About"
            component={Link}
            to="/about"
            style={aboutTabStyle}
          />
          <Tab
            label="Counters"
            component={Link}
            to="/counters"
            style={countersTabStyle}
          />
          <Tab
            label="Login"
            component={Link}
            to="/login"
            style={loginTabStyle}
          />
          <Tab
            label="Login Redux"
            component={Link}
            to="/login-redux"
            style={reduxTabStyle}
          />
          <Tab
            label="Login Formik"
            component={Link}
            to="/login-formik"
            style={formikTabStyle}
          />
        </Tabs>
      </AppBar>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/login-redux" element={<LoginReduxContainer />} />
        <Route path="/login-redux/success" element={<ReduxSuccess />} />
        <Route path="/login-formik/success" element={<FormikSuccess />} />
        <Route path="/login-formik" element={<LoginFormik />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
