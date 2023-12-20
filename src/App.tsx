import React from "react";

import "./assets/css/colors/pink.css";
import IndexFirst from "./pages/index/index1";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <IndexFirst />
      } />
    </Routes>
  );
}

export default App;
