import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const fetchMoviesAction = fetchMovies();

  {/* todo: remove before submit */ }
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    dispatch(fetchMoviesAction);
  }, [dispatch, fetchMoviesAction]);

  return (
    <div>
      <header className="header">
        <h1>Countries Of The World</h1>
      </header>

      {/* todo: remove before submit */}
      {showButton && <Link to='movies' onClick={() => setShowButton(false)}>Show movies</Link>}
      <Outlet />
    </div>
  )
}

export default Home;