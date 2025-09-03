import { useState } from "react";
import { Search, Ticket, Star, Users, Bell, Cpu, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const features = [
    { icon: Ticket, title: "Multi-category Booking", desc: "Book movies, concerts, sports & travel in one place." },
    { icon: Star, title: "Seat Transparency", desc: "See seat photos, reviews & comfort index." },
    { icon: Users, title: "Inclusive Coverage", desc: "Events & theatres from small towns included." },
    { icon: Bell, title: "Automated Notifications", desc: "Reminders & updates without manual checks." },
    { icon: Cpu, title: "AI Recommendations", desc: "Personalized suggestions for events & movies." },
    { icon: Globe, title: "Ad-supported Discovery", desc: "Creators & small events promoted fairly." },
    { icon: TrendingUp, title: "Dynamic Pricing", desc: "Affordable tickets with fair price adjustments." },
    { icon: Users, title: "Community Reviews", desc: "Real feedback on events & seating quality." },
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-blue-700 text-white shadow-md">
        <h1 className="text-2xl font-bold">TickQuick</h1>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Movies</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Travel</li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search for movies, events, or venues..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-2/3 md:w-1/2 p-3 rounded-xl border shadow-md"
        />
      </div>

      {/* Slideshow / Banner */}
      <div className="mt-8 w-full h-64 bg-blue-200 flex items-center justify-center text-blue-900 text-2xl font-semibold">
        🎬 Exciting Events & Movies Coming Soon!
      </div>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-blue-100"
          >
            <f.icon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-8">
        <p>© 2025 TickQuick • All Rights Reserved</p>
      </footer>
    </div>
  );
}
