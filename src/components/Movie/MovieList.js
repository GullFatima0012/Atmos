"use client";

import { useEffect, useState, useCallback } from "react";
import MovieCard from "../Card/MovieCard";
import Loader from "../Loader";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getVideos = useCallback(async () => {
    setLoading(true);
    setError(null);

    const accessToken = process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN;

    if (!accessToken) {
      console.error("Vimeo Access Token is missing");
      setError("Vimeo Access Token is missing. Please check your environment variables.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://api.vimeo.com/me/videos`, {
        method: "GET",
        headers: {
          Authorization: `Bearer 9e60951cd4b1c4c98a1e159c43eafd59`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data?.data?.length > 0) {
        setMovies(data.data);
      } else {
        setError("No videos found.");
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  if (loading) return <Loader />;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <div className="genres-area py-80" style={{ backgroundColor: "#F1EFE7", color: "#F1EFE7" }}>
      {/* Embedded Vimeo Video */}
 

  

      {/* Movie List */}
      <div className="container" style={{ color: "#F1EFE7" }}>
        {movies.length > 0 ? (
          <div className="row row-gap-4">
            {movies.map((movie) => (
              <div key={movie.uri} className="col-lg-4 col-sm-6">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>No videos available.</p>
        )}
      </div>
    </div>
  );
}
