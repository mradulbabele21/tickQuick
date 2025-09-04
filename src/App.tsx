import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
//import Movies from "./pages/Movies";
//import Shows from "./pages/Shows";
//import Railway from "./pages/Railway";
//import Flight from "./pages/Flight";
import BusPage from "./pages/BusPage";
import TurfPage from "./pages/TurfPage";
import HotelsPage from "./pages/HotelsPage";
import PoolingPage from "./pages/PoolingPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/railway" element={<Railway />} />
        <Route path="/flight" element={<Flight />} /> */}
        <Route path="/bus" element={<BusPage />} />
        <Route path="/turf" element={<TurfPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/pooling" element={<PoolingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
