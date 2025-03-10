"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function CategoryPage() {
  const { id } = useParams(); // Get category ID from URL
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchVideos(id);
    }
  }, [id]);

  async function fetchVideos(category) {
    const VIMEO_ACCESS_TOKEN = process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN;
    if (!VIMEO_ACCESS_TOKEN) {
      console.error("Vimeo API Token is missing.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://api.vimeo.com/categories/${category}/videos`, {
        headers: {
          Authorization: `Bearer ${VIMEO_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch videos");

      const data = await response.json();
      setVideos(
        data.data.map((video) => ({
          title: video.name,
          url: video.player_embed_url,
        }))
      );
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  }

  const breadcrumb = {
    title: `Video Category: ${id ? id.replace("-", " ") : "Loading..."}`,
    links: [
      { name: "Home", href: "/" },
      { name: `Category - ${id}`, href: "#" },
    ],
  };

  return (
    <>
      <HeaderOne data={{ breadcrumb: breadcrumb }} />
      <main className="main">
        <div className="genres-area py-80" style={{ backgroundColor: "#F1EFE7" }}>
          <h1 className="text-2xl font-bold mb-4">Category: {id ? id.replace("-", " ") : "Loading..."}</h1>

          {loading ? (
            <p>Loading videos...</p>
          ) : videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
                  <iframe
                    src={video.url}
                    width="100%"
                    height="250"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              ))}
            </div>
          ) : (
            <p>No videos found for this category.</p>
          )}
        </div>
      </main>
      <FooterOne />
    </>
  );
}
