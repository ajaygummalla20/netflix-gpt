import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { setMovieData } from "../utilis/movieSlice";

const useMovieData = (movieId) => {
    let dispatch = useDispatch();
    const getMovieData = async () => {
        let data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        let json = await data.json();
        let trailerData = json.results.filter(x => x.type === "Trailer");
        let mainTrailer = trailerData.length > 0 ? trailerData[0] : json.results[0];
        dispatch(setMovieData(mainTrailer));
    };
    useEffect(() => {
        getMovieData();
    }, []);
};

export default useMovieData;
