import React from "react";
import Recommender from "./components/Recommender";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mt-10">
        🎥 Movie & TV Show Recommender 📺
      </h1>
      <p className="text-lg mt-2 text-center max-w-md">
        Discover the best movies and TV shows tailored to your preferences. Just
        enter a genre, actor, or theme below!
      </p>
      <Recommender />
    </div>
  );
};

export default page;
