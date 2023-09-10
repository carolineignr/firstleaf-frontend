import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function countries() {
  const { countries } = useSelector(state => state.countries);
  const [hascountries, setHasCountries] = useState(false);

  useEffect(() => {
    console.log(countries)
    if (countries.length > 0) setHasCountries(true);
  }, [countries]);

  return (
    <div>
      {hascountries && countries.map((country) =>
        <>
          <div>{country.name.common}</div>
        </>
      )}
    </div>
  )
}

export default countries;