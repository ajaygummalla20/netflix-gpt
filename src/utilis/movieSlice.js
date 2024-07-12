import { createSlice } from "@reduxjs/toolkit";
const movie = createSlice({
    name: "movie",
    initialState: {
        movie: null,
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1682769467.
        movieData: null,
    },
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        setMovieData: (state, action) => {
            state.movieData = action.payload;
        },
    },
});

export const { setMovie } = movie.actions;
export const { setMovieData } = movie.actions;

export default movie.reducer;