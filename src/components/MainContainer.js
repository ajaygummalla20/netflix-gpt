import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie.movie);
  if (!movies) return;

  let mainMovie = movies[0];
  console.log(mainMovie);
  return (
    <div>
      <VideoTitle  title={mainMovie.title} discription={mainMovie.overview} className="pt-20"/>
      <VideoBackground/>
    </div>
  );
};

export default MainContainer;
