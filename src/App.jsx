//import routes, route
import { Routes, Route } from "react-router-dom";
import "./css/app.css";
import React from "react";
import Home from "./pages/Home.jsx";
import Menu from "./components/Menu.jsx";
import TechnoAdd from "./pages/TechnoAdd.jsx";
import TechnoList from "./pages/TechnoList";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd />} />
        <Route path="/list" element={<TechnoList />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
