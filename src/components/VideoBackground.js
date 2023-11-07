import { useSelector } from "react-redux";
import useVideoBackgroundHook from "../hooks/useVideoBackground";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => {
    return store.movieData.trailer;
  });
  useVideoBackgroundHook(id);
  return (
    <div className="w-full relative">
      <div className="absolute bg-gradient-to-r from-black top-0 bottom-0 left-0 right-0"></div>
      <iframe
        className="w-full aspect-video pointer-events-none -mt-[120px]"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=" +
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
