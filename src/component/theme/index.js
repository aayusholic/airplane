import React, { createContext, useState, useContext } from "react";
import Fresh from "../freshlogin";

// Create a Context
const ThemeContext = createContext();

function Fitness() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
  
      <ThemedText />
      <button onClick={toggleTheme}>Theme</button>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === "dark" ? "#333" : "#FFF",
        color: theme === "dark" ? "#FFF" : "#000",
      }}
    >
      Press ME
    </button>
  );
}

function ThemedText() {
  const theme = useContext(ThemeContext);

  return (
    <p style={{ color: theme === "dark" ? "#FFF" : "#000" }}>
      Learning React with Rojan Dai
    </p>
  );
}

export default Fitness;