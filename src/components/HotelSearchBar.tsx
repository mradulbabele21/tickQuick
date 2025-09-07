import React from "react";

interface HotelSearchBarProps {
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
}

const HotelSearchBar: React.FC<HotelSearchBarProps> = ({ budget, setBudget }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      {/* Location & Dates */}
      <div className="flex flex-col md:flex-row gap-4">
        <input type="text" placeholder="Enter location" className="flex-1 p-2 border rounded" />
        <input type="date" className="p-2 border rounded" />
        <input type="date" className="p-2 border rounded" />
        <select className="p-2 border rounded">
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4+ Guests</option>
        </select>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Search
        </button>
      </div>

      {/* Budget Slider */}
      <div>
        <label className="block text-gray-700 mb-2 font-semibold">
          Budget: Up to ₹{budget}
        </label>
        <input
          type="range"
          min="500"
          max="20000"
          step="500"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full accent-blue-700"
        />
      </div>
    </div>
  );
};

export default HotelSearchBar;
