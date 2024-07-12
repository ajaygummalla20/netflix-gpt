import { useSelector } from "react-redux";
import useMovieData from "../hooks/useMovieData";

const VideoBackground = (movieId) => {
    useMovieData(movieId.movieId);
    let data = useSelector((state) => state.movie.movieData);
    if(!data) return

    return (
        <div>
            <iframe className="w-screen aspect-video h-auto" src={"https://www.youtube.com/embed/" + data?.key+'?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoBackground;
