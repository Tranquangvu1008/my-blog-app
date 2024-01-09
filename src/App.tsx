import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product";

const App = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Product />} />
    </Routes>
  );
}

export default App;
