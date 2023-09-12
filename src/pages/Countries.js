import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Country/Card/Card";

function countries() {
  const { countries } = useSelector(state => state.countries);
  const [hascountries, setHasCountries] = useState(false);

  useEffect(() => {
    if (countries?.length > 0) setHasCountries(true);
  }, [countries]);

  return (
    <div className="container">
      <SearchBar />
      <div className="cards-container">
        {hascountries ? countries.map((country, index) =>
          <Card key={index} country={country} />
        ) : <p>No countries yet</p>}
      </div>
      {/* <div className="country-details">
        Details
      </div> */}
    </div>
  )
}

export default countries;