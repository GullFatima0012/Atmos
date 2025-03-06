"use client";
// import { trendingOneMoviesData as movies } from "@/data/movie";
import MovieCard from "../Card/MovieCard";
import { useEffect, useState } from "react";
import Loader from "../Loader";

export default function MovieList() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.vimeo.com/me/videos", {
          headers: {
            Authorization: `Bearer abd8e7cb9bdeff107bb9bb03c6e05505`,
          },
        });

        const data = await response.json();

        if (data) {
          setMovies(data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="genres-area py-80">
      <div className="container">
        {movies && movies.length > 0 && (
          <div className="row row-gap-4">
            {movies.map((movie, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
