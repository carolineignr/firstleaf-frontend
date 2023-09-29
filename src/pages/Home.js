import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../redux/actions";
import { Link, Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const fetchCountriesAction = fetchCountries();

  useEffect(() => {
    console.log(process.env)
    dispatch(fetchCountriesAction);
  }, [dispatch, fetchCountriesAction]);

  const showInitialButton = () => {
    return location.pathname === '/';
  }

  return (
    <>
      <Header />
      {showInitialButton() && <Link to='countries' className="initialButton">Let's start</Link>}
      <Outlet />
    </>
  )
}

export default Home;