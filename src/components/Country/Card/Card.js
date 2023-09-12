import styles from './Card.module.scss';

export default function Card({ country, onClickDetailsBtn }) {
  const { name, capital, population, flags } = country;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={flags.png} alt={flags.alt} />
        <span>{name.official}</span>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.cardFooter_infos}>
          <span>Capital: {capital || 'Unknown'}</span>
          <span>Population: {population || 'Unknown'}</span>
        </div>
        <div className={styles.cardFooter_link} onClick={onClickDetailsBtn}>
          See details
        </div>
      </div>
    </div>
  )
}