// components/VideoPlayerModal.jsx
"use client";

import React, { useEffect } from "react";

export default function VideoPlayerModal({ video, onClose }) {
  // Extract video ID from the URI
  const videoId = video?.uri?.split('/').pop();

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="video-container">
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={video.name}
          ></iframe>
        </div>
      </div>
      
      <style jsx>{`
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
     
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .video-modal-content {
          position: relative;
          width: 90%;
          max-width: 700px;
          height: 60vh;
          background: black;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }
        
        .video-container {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}