import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../redux/actions";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const fetchCountriesAction = fetchCountries();

  {/* todo: remove before submit */ }
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    dispatch(fetchCountriesAction);
  }, [dispatch, fetchCountriesAction]);

  return (
    <div>
      <header className="header">
        <h1>Countries Of The World</h1>
      </header>

      {/* todo: remove before submit */}
      {showButton && <Link to='countries' onClick={() => setShowButton(false)}>Show countries</Link>}
      <Outlet />
    </div>
  )
}

export default Home;