import dynamic from "next/dynamic";

const VideoOne = dynamic(() => import("@/components/Video/VideoOne"), {
  ssr: false,
});

export default function MovieCard({ movie }) {
  return (
    <div
      className="movie-card-small position-relative"
      style={{
        borderRadius: 0,
      }}
    >
      <VideoOne embedHtml={movie?.embed?.html} />
    </div>
  );
}
