import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div id={styles.searchWrapper}>
      <input id={styles.searchBar} placeholder="Search by country name" />
    </div>
  )
}