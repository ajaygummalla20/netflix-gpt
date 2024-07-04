import { createSlice } from "@reduxjs/toolkit";
const movie = createSlice({
    name: "movie",
    initialState: {
        movie: null,
    },
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
    },
});

export const { setMovie } = movie.actions;

export default movie.reducer;