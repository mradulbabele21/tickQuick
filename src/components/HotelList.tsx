import React from 'react';
import HotelCard from './HotelCard';

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

const HotelList: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} {...hotel} />
      ))}
    </div>
  )
}

export default HotelList;