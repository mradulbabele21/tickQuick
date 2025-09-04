import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-royalBlue text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-luxeGold">TickQuick</h1>

      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-luxeGold">Home</Link></li>
        <li><Link to="/movies" className="hover:text-luxeGold">Movies</Link></li>
        <li><Link to="/shows" className="hover:text-luxeGold">Shows</Link></li>
        <li><Link to="/railway" className="hover:text-luxeGold">Railway</Link></li>
        <li><Link to="/flight" className="hover:text-luxeGold">Flights</Link></li>
        <li><Link to="/bus" className="hover:text-luxeGold">Bus</Link></li>
        <li><Link to="/turf" className="hover:text-luxeGold">Turf</Link></li>
        <li><Link to="/hotels" className="hover:text-luxeGold">Hotels</Link></li>
        <li><Link to="/pooling" className="hover:text-luxeGold">Pooling</Link></li>
      </ul>
    </nav>
  );
}
