import React from "react";
import BusSearchBar from "../components/BusSearchBar";
import BusList from "../components/BusList";
import { div } from "framer-motion/client";

const BusPage: React.FC = () => {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Book Your Bus</h1>

      {/* Search Bar */}
      <BusSearchBar />

      {/* Bus List */}
      <BusList />
    </div>
  )
}

export default BusPage