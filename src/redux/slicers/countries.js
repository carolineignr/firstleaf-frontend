import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries: null,
}

export const countriesSlicer = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload.data
    },
  },
})

export const { setCountries } = countriesSlicer.actions;

export default countriesSlicer.reducer;