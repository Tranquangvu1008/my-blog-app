import React from "react";

import IndexFirst from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Festival from "./pages/Festival";
import FestivalDetail from "./pages/Festival/FestivalDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import Food from "pages/Food";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
        <Route path="/food" element={
          <Food />
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
