import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './components/About'; // Ensure About.js exists
// import Home from './components/Home'; // Ensure Home.js exists

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'Netflix Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'Netflix Light Mode';
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Netflix"
        aboutUs="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      {/* Removed <Routes> and <Route> */}
      <TextForm showAlert={showAlert} />

      {/* </Router> */}
    </>
  );
}

export default App;
