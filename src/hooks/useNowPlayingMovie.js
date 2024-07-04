import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utilis/constants';
import { setMovie } from '../utilis/movieSlice';

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(setMovie(json.results));
    };

    fetchData();
  }, []);

  return null;
};

export default useNowPlayingMovie;