import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CountryDetails from "./components/CountryDetails";
import { ThemeProvider } from "./ThemeProvider";
import { lightTheme } from "./constant";


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryCode" element={<CountryDetails />} />
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;

