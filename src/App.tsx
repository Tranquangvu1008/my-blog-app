import React from "react";

import IndexFirst from "./pages/Home/index1";
import { Route, Routes } from "react-router-dom";
import Festival from "./pages/Festival/Festival";
import FestivalDetail from "./pages/Festival/FestivalDetail";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <IndexFirst />
      } />
      <Route path="/festival" element={
        <Festival />
      } />
      <Route path="/festival/:id" element={
        <FestivalDetail />
      } />
      <Route path="/blog" element={
        <Blog />
      } />
      <Route path="/blog/:id" element={
        <BlogDetail />
      } />
      <Route path="/contact" element={
        <Contact />
      } />
    </Routes>

  );
}

export default App;
