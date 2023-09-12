import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setFilteredCountriesAct } from "../redux/actions";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Country/Card/Card";

function countries() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector(state => state.countries);
  const [hasCountries, setHasCountries] = useState(false);

  const setFilteredCountriesAction = () => {
    dispatch(setFilteredCountriesAct(state.countries));
  };

  const isFirstRender = () => {
    return state.countries?.length > 0 && state.filteredCountries.length === 0
  }

  useEffect(() => {
    if (state.countries?.length === 0) {
      navigate('/');
    }

    if (isFirstRender()) {
      setFilteredCountriesAction();
    }

    if (state.filteredCountries.length > 0) {
      setHasCountries(true);
    }
  }, [state.filteredCountries, dispatch, setFilteredCountriesAct]);

  return (
    <div className="container">
      <SearchBar />
      <div className="cards-container">
        {hasCountries ? state.filteredCountries.map((country, index) =>
          <Card key={index} country={country} />
        ) : <p>No countries yet</p>}
      </div>
    </div>
  )
}

export default countries;