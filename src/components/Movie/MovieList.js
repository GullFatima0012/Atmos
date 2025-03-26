// components/MovieList.jsx
"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useAtom } from "jotai";
import { tokenAtom } from "@/atoms/authAtom"; // Import token state
import MovieCard from "../Card/MovieCard";
import VideoPlayerModal from "./VideoPlayerModal"; // Import the new component
import Loader from "../Loader";
import { Button, Box } from "@mui/material";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [token] = useAtom(tokenAtom); // Access Jotai token
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const openVideoPlayer = (movie) => {
    setSelectedVideo(movie);
    setIsPlayerOpen(true);
  };

  const closeVideoPlayer = () => {
    setIsPlayerOpen(false);
  };

  const getVideos = useCallback(async () => {
    if (!token) {
      setMessage("You are not authenticated. Please log in first.");
      return;
    }

    setLoading(true);
    setError(null);
    setMessage("");

    try {
      const accessToken = process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN;
      if (!accessToken) {
        throw new Error("Vimeo Access Token is missing.");
      }

      const response = await fetch("https://api.vimeo.com/me/videos", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data?.data?.length > 0) {
        setMovies(data.data);
        setMessage("Enjoy watching your videos!");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  if (!token) {
    return (
      <div className="genres-area" style={{  color: "black" }}>
        <div className="container">
          <Box 
            sx={{
              py: { xs: 4, sm: 4, md: 5, lg: 8 } ,
              textAlign: "center",
              padding: "20px",
              py: 2.9,
              px: 4.2,
              mt: 15,
              mb: 5,
          
              marginBottom: "20px",
            }}
          >
            <h6 style={{ color: "black" ,fontFamily: '"SF Pro Display", sans-serif' }}>You are not Authenticated. Please log in first.</h6>
            <Link href="/register" passHref>
              <Button
                variant="contained"
             
                sx={{
                  bgcolor: "black",
                  fontFamily: '"SF Pro Display", sans-serif' ,
                  color: "white",
                  mt: 2,
                  borderRadius: 2,
                  py: 2.2,
                  px: 4.2,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Login / Register
              </Button>
            </Link>
          </Box>
        </div>
      </div>
    );
  }

  return (
    <div className="genres-area py-80 mt-50" style={{  color: "black" }}>
      <div className="container">
        {message && <div style={{  borderRadius: "5px", textAlign: "center", fontWeight: "bold", color: "black", padding: "10px", marginBottom: "20px" }}>{message}</div>}
        {loading ? (
          <Loader />
        ) : movies.length > 0 ? (
          <div className="row row-gap-4 m-2">
            {movies.map((movie) => (
              <div key={movie.uri} className="col-lg-4 col-sm-6">
                <MovieCard 
                  movie={movie} 
                  onClick={() => openVideoPlayer(movie)} 
                />
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>No videos available.</p>
        )}
      </div>

      {/* Video Player Modal */}
      {isPlayerOpen && selectedVideo && (
        <VideoPlayerModal 
          video={selectedVideo} 
          onClose={closeVideoPlayer} 
        />
      )}
    </div>
  );
}