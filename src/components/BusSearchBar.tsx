import React, { useState } from "react";

const BusSearchBar: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    alert(`Searching buses from ${from} to ${to} on ${date}`);
  };

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md flex gap-4">
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="p-2 border rounded w-1/4"
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="p-2 border rounded w-1/4"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border rounded w-1/4"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};


export default BusSearchBar;