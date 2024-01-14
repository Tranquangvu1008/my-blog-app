import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./page/Home";
// import Product from "./page/Product";
// import { Logic1 } from "./page/Logic1";
import { ProductList } from "./page/Logic2";
import { Logic3 } from "./page/Logic3";

const App = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Logic3 />} />
    </Routes>
  );
}

export default App;
