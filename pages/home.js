import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const movies = [
    { id: "1", title: "Avengers: Endgame", posterUrl: "https://via.placeholder.com/150" },
    { id: "2", title: "Spider-Man: No Way Home", posterUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Now Showing</h2>
      <div className="grid grid-cols-2 gap-4">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="border p-2 rounded hover:shadow">
            <img src={movie.posterUrl} alt={movie.title} className="w-full h-48 object-cover mb-2"/>
            <h3 className="text-lg font-semibold">{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
