import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const fetchMoviesAction = fetchMovies();

  useEffect(() => {
    dispatch(fetchMoviesAction);
  }, [dispatch, fetchMoviesAction]);

  return (
    <div>
      <header className="header">
        <h1>Countries Of The World</h1>
      </header>

      <button>Show movies</button>
    </div>
  )
}

export default Home;