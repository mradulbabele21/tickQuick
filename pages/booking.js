import React from "react";
import { useParams } from "react-router-dom";

function Booking() {
  const { id } = useParams();

  return (
    <div className="max-w-md mx-auto border p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Booking</h2>
      <p>Booking for showtime ID: {id}</p>
      <p>Seat selection and payment coming soon!</p>
    </div>
  );
}

export default Booking;
