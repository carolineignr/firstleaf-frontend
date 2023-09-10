import { setMovies } from "../slicers";
import { getMovies } from "../../api/client";

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const data = await getMovies();
      dispatch(setMovies(data));
    } catch (e) {
      console.log('Error while fetching movies data: ', e);
    }
  }
};