"use client";

import React, { useState } from "react";

const Recommender = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ movies: [], tvShows: [] });
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!query.trim()) {
      setError("Please enter a valid input.");
      return;
    }
    setError("");
    setResults({ movies: [], tvShows: [] });

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations.");
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-lg w-full">
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter an actor, genre, or plot..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="w-full p-3 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
        onClick={handleSubmit}
      >
        Get Recommendations
      </button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-600">Movies:</h2>
        <ul className="list-disc pl-6 mt-2">
          {results.movies.map((movie, index) => (
            <li key={index} className="text-gray-800">
              {movie}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold text-purple-600 mt-4">
          TV Shows:
        </h2>
        <ul className="list-disc pl-6 mt-2">
          {results.tvShows.map((show, index) => (
            <li key={index} className="text-gray-800">
              {show}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recommender;
