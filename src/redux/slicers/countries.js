import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries: [],
  filteredCountries: []
}

export const countriesSlicer = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload.data
    },
    setFilteredCountries: (state, action) => {
      state.filteredCountries = action.payload.data
    }
  },
})

export const { setCountries, setFilteredCountries } = countriesSlicer.actions;

export default countriesSlicer.reducer;