import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Home } from "./pages/Home";
import { Reserver } from "./pages/Reserver";
import { AdminReservations } from "./pages/AdminReservations";
import { AdminMenu } from "./pages/AdminMenu";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserver" element={<Reserver />} />
        <Route path="/admin/reservations" element={<AdminReservations />} />
        <Route path="/admin/menu" element={<AdminMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
