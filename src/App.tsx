import React from "react";

import IndexFirst from "./pages/Home/index1";
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
