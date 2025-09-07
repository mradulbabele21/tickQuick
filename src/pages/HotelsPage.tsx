import React, { useState } from "react";
import HotelSearchBar from "../components/HotelSearchBar";
import HotelCard from "../components/HotelCard";

const hotels = [
  {
    name: "The Taj Palace",
    location: "Delhi",
    price: 12000,
    rating: 4.9,
    image: "https://source.unsplash.com/400x200/?hotel,luxury",
  },
  {
    name: "Sea View Resort",
    location: "Goa",
    price: 4500,
    rating: 4.5,
    image: "https://source.unsplash.com/400x200/?beach,hotel",
  },
  {
    name: "Hilltop Retreat",
    location: "Manali",
    price: 3000,
    rating: 4.2,
    image: "https://source.unsplash.com/400x200/?mountain,hotel",
  },
];

const HotelsPage: React.FC = () => {
  const [budget, setBudget] = useState(20000); // default max budget

  // filter hotels by budget
  const filteredHotels = hotels.filter((hotel) => hotel.price <= budget);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Find Your Hotel</h1>

      {/* Search Bar with Budget Control */}
      <HotelSearchBar budget={budget} setBudget={setBudget} />

      {/* Hotel List */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {filteredHotels.map((hotel, index) => (
          <HotelCard key={index} {...hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
