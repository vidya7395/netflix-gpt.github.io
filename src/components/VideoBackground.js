import { useSelector } from "react-redux";
import useVideoBackgroundHook from "../hooks/useVideoBackground";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => {
    return store.movieData.trailer;
  });
  useVideoBackgroundHook(id);
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        autoPlay=""
        allow="autoplay; encrypted-media;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
