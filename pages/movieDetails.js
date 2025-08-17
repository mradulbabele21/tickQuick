import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const movie = {
    id,
    title: "Sample Movie",
    description: "This is a sample description of the movie.",
    showtimes: [
      { time: "12:00 PM", id: "101" },
      { time: "03:00 PM", id: "102" },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
      <p className="mb-4">{movie.description}</p>
      <h3 className="text-xl font-semibold mb-2">Showtimes</h3>
      <ul>
        {movie.showtimes.map((show) => (
          <li key={show.id} className="mb-1">
            <Link to={`/booking/${show.id}`} className="text-blue-600 hover:underline">
              {show.time}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetails;
