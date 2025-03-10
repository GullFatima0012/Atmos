const fetchAllVideos = async () => {
  try {
    const response = await fetch("https://api.vimeo.com/me/videos", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch videos:", error);
    return null; // Return null to handle errors in components
  }
};

// Export the function
export default fetchAllVideos;
