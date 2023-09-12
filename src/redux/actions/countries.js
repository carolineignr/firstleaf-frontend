import { setCountries, setFilteredCountries } from "../slicers";
import { getCountries } from "../../api/client";

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const data = await getCountries();
      dispatch(setCountries({ data }));
    } catch (e) {
      console.log('Error while setting countries data: ', e);
    }
  }
};

export const setFilteredCountriesAct = (data) => {
  return (dispatch) => {
    dispatch(setFilteredCountries({ data }));
  }
}