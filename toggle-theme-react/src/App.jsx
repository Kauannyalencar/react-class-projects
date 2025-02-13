import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Landing from "./components/Header/Landing";
import { ThemeContext } from "./Theme";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return(
    <div className={`App ${theme}`}>
      <Header />
    <Landing />
    </div>
  )

}

export default App;
