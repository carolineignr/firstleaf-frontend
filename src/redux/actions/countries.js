import { setCountries } from "../slicers";
import { getCountries } from "../../api/client";

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const data = await getCountries();
      dispatch(setCountries({ data }));
    } catch (e) {
      console.log('Error while fetching countries data: ', e);
    }
  }
};