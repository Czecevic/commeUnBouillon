import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Home } from "./pages/Home";
import { Reserver } from "./pages/Reserver";

import "./App.css";

function App() {
  return (
    <Router basename="commeUnBouillon">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserver" element={<Reserver />} />
      </Routes>
    </Router>
  );
}

export default App;
