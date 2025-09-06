import React from 'react';

interface BusCardProps {
  name: string;
  departure: string;
  arrival: string;
  price: number;
  seats: number;
}

const BusCard: React.FC<BusCardProps> = ({ name, departure, arrival, price, seats }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h2 className="text-xl font-bold text-blue-700">{name}</h2>
        <p className="text-gray-600">
          {departure} → {arrival}
        </p>
      </div>
      <div className="text-right">
        <p className="font-semibold">₹ {price}</p>
        <p className="text-sm text-gray-500">{seats} seats left</p>
        <button className="mt-2 bg-gold text-white px-4 py-2 rounded hover:bg-yellow-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BusCard;