import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./page/Home";

const App = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
