import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../redux/actions";
import { Link, Outlet } from "react-router-dom";

import Header from "../components/Header/Header";

function Home() {
  const dispatch = useDispatch();
  const fetchCountriesAction = fetchCountries();

  useEffect(() => {
    dispatch(fetchCountriesAction);
  }, [dispatch, fetchCountriesAction]);

  return (
    <>
      <Header />
      <Outlet />
      {/* <Link to='/countries'>See countries</Link> */}
    </>
  )
}

export default Home;