import { useDispatch, useSelector } from 'react-redux';

import { setFilteredCountriesAct } from "../../redux/actions";
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const dispatch = useDispatch();
  const { filteredCountries, countries } = useSelector(state => state.countries);

  function handleSearchInputChange(event) {
    const input = event.target.value;

    if (input.length > 0) {
      const updatedList = filteredCountries.filter((country) => {
        return country.name.common.toLowerCase().indexOf(input.toLowerCase()) !== -1;
      })

      dispatch(setFilteredCountriesAct(updatedList));
      return;
    }

    dispatch(setFilteredCountriesAct(countries));
  }

  return (
    <div id={styles.searchWrapper}>
      <input id={styles.searchBar} onChange={handleSearchInputChange} placeholder="Search by country name" />
    </div>
  )
}