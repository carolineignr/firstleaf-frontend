import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from 'react-dom';
import { useNavigate } from "react-router-dom";

import { setFilteredCountriesAct } from "../redux/actions";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Country/Card/Card";
import Details from "../components/Country/Details/Details";

function countries() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector(state => state.countries);
  const [hasCountries, setHasCountries] = useState(false);
  const [countryDetails, setCountryDetails] = useState(null);

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

  function openDetailsModal(country) {
    const modalElement = document.getElementById('modal');
    if (modalElement) {
      console.log(country);
      // setCountryDetails(country)
      modalElement.classList.add('fade-in');
    }
  }

  function closeDetailsModal() {
    const modalElement = document.getElementById('modal');
    if (modalElement) {
      setCountryDetails(null);
      modalElement.classList.remove('fade-in');
    }
  }

  return (
    <div className="container">
      <SearchBar />
      <div className="cards-container">
        {hasCountries ? state.filteredCountries.map((country, index) =>
          <Card key={index} country={country} onClickDetailsBtn={() => openDetailsModal(country)} />
        ) : <p>No countries yet</p>}
      </div>

      <Details onClose={closeDetailsModal} country={countryDetails} />
    </div>
  )
}

export default countries;