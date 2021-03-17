import React, { useEffect } from 'react';
import './App.css';
import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";
import Container from "./theme/components/Container"
import { ThemeProvider } from "styled-components";
import { darkModeAction } from './actions/config_action';

import Chat from "./Components/Chat/Chat";
import Join from "./Components/Join/Join";
import SignUp from "./Components/SignUp/SignUp";
import { HashRouter as Router, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const config = useSelector(state => state.theme)

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])

  const themeChange = (value) => {
    window.localStorage.setItem('theme', value)
    dispatch(darkModeAction(value))
  }

  return (
    <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
      <nav style={{ width: '100%', padding: '2rem 0 ', backgroundColor: 'gray', textAlign: 'center' }}>
        <button onClick={() => themeChange('dark')}>Dark Mode</button>
        <button onClick={() => themeChange('light')}>Light Mode</button>
      </nav>

      <Container >
      <Router className="App">
      <Route path="/" exact component={Join} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/chat" component={Chat} />
    </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
