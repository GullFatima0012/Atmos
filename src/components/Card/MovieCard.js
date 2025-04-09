// components/Card/MovieCard.jsx
"use client";

import React from "react";

export default function MovieCard({ movie, onClick }) {
  // Extract thumbnail from movie data - adjust this based on your actual Vimeo API response structure
  const thumbnail = movie.pictures?.sizes?.[3]?.link || "/default-thumbnail.jpg";

  return (
    <div className="movie-card" onClick={onClick}>
      <div className="movie-thumbnail">
        <img src={thumbnail} alt={movie.name} />
        <div className="play-overlay">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <h3 style={{color:"black"}}className="movie-title">{movie.name}</h3>
    <p className="fw-medium lh-1  px-2" style={{textAlign: "justify",}}>{movie.description}</p>
      <p className="movie-duration">{formatDuration(movie.duration)}</p>

      <style jsx>{`
        .movie-card {
          cursor: pointer;
          transition: transform 0.3s;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .movie-card:hover {
          transform: translateY(-5px);
        }
        
        .movie-thumbnail {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          overflow: hidden;
        }
        
        .movie-thumbnail img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .movie-card:hover .play-overlay {
          opacity: 1;
        }
        
        .movie-title {
          padding: 12px 16px 4px;
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }
        
        .movie-duration {
          padding: 0 16px 12px;
          font-size: 14px;
          color: #666;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

// Helper function to format duration from seconds to mm:ss
function formatDuration(seconds) {
  if (!seconds) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
