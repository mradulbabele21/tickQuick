import React from 'react';

interface HotelCardProps {
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

const HotelCard: React.FC<HotelCardProps> = ({ name, location, price, rating, image }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Hotel Image */}
      <img src={image} alt={name} className="w-full h-40 object-cover" />

      {/* Hotel Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-800">{name}</h2>
        <p className="text-gray-600">{location}</p>
        <p className="font-semibold mt-2">₹{price} / night</p>
        <p className="text-yellow-500">⭐ {rating}</p>
        <button className="mt-3 bg-gold text-white px-4 py-2 rounded hover:bg-yellow-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelCard;