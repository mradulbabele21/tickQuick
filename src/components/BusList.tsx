import React from 'react';
import BusCard from './BusCard';

const BusList: React.FC = () => {
  return (
    <div className="space-y-4 mt-6">
      <BusCard
        name="Chhabra Express"
        departure="Jhansi"
        arrival="Lalitpur"
        price={550}
        seats={12}
      />
      <BusCard
        name="Green Travels"
        departure="Mumbai"
        arrival="Pune"
        price={350}
        seats={5}
      />
      <BusCard
        name="BlueBird Travels"
        departure="Lucknow"
        arrival="Kanpur"
        price={150}
        seats={20}
      />
    </div>
  )
}

export default BusList;