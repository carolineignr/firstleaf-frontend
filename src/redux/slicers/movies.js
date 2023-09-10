import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: null,
}

export const moviesSlicer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload.data
    },
  },
})

export const { setMovies } = moviesSlicer.actions;

export default moviesSlicer.reducer;