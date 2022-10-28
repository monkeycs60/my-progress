import Home from "./pages/Home.jsx";
import Menu from "./components/Menu.jsx";
import "./css/app.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Home />
    </React.Fragment>
  );
}

export default App;
