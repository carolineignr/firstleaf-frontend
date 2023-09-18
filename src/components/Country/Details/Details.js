import { Wrapper } from "@googlemaps/react-wrapper";

import styles from './Details.module.scss';
import { FaMapMarkerAlt, FaGlobeAmericas } from 'react-icons/fa';

import MapGoogle from './MapGoogle';

export default function Details({ onClose, country }) {
  const renderIndependencyTag = (isIndependent) => {
    if (isIndependent) {
      return <div className={`${styles.tag__positive} ${styles.tag}`}>Independent country</div>
    } else {
      return <div className={`${styles.tag__negative} ${styles.tag}`}>Not independent country</div>
    }
  }

  const renderONUTag = (isMember) => {
    if (isMember) {
      return <div className={`${styles.tag__positive} ${styles.tag}`}>ONU member</div>
    } else {
      return <div className={`${styles.tag__negative} ${styles.tag}`}>Not ONU member</div>
    }
  }

  const renderLitoralAccessTag = (hasLitoral) => {
    if (hasLitoral) {
      return <div className={`${styles.tag__positive} ${styles.tag}`}>Has litoral</div>
    } else {
      return <div className={`${styles.tag__negative} ${styles.tag}`}>Hasn't litoral</div>
    }
  }

  const renderCurrency = (currenciesObj) => {
    const firstCurrency = Object.keys(currenciesObj)[0];
    const firstCurrencyValues = Object.values(currenciesObj)[0];

    return (
      <div className={styles.card}>
        <span className={styles.title}>Currency</span>
        <span className={styles.value}>{`${firstCurrency} (${firstCurrencyValues.symbol})`}</span>
        <span className={styles.detail}>{firstCurrencyValues.name}</span>
      </div>
    )
  }

  return (
    <div id='modal' className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h1>{country?.name.common}</h1>
          <FaMapMarkerAlt /> <span>Capital: {country?.capital}</span> <br /> <br />
          <FaGlobeAmericas /> <span>Continent: {country?.continents[0]}</span>
          <button onClick={onClose} className={styles.closeButton}>x</button>
        </div>

        <div className={styles.flagAndMap}>
          <img src={country?.flags.png} alt={country?.flags.alt} width='400' height='200' />
          {/* todo: move apiKey value to .env file */}
          {country && <Wrapper apiKey="">
            <MapGoogle center={{ lat: country?.latlng[0], lng: country?.latlng[1] }} />
          </Wrapper>}
        </div>

        <div className={styles.tagsContainer}>
          {renderIndependencyTag(country?.independent)}
          {renderONUTag(country?.unMember)}
          {renderLitoralAccessTag(!country?.landlocked)}
        </div>

        <div className={styles.generalInfoContainer}>
          <div className={styles.card}>
            <span className={styles.title}>Population</span>
            <span className={styles.value}>{country?.population}</span>
            <span className={styles.detail}>habitants</span>
          </div>

          {country && renderCurrency(country?.currencies)}

          <div className={styles.card}>
            <span className={styles.title}>Total area</span>
            <span className={styles.value}>{country?.area}</span>
            <span className={styles.detail}>km²</span>
          </div>

          <div className={styles.card}>
            <span className={styles.title}>Timezone</span>
            <span className={styles.value}>{country?.timezones[0]}</span>
            <span className={styles.detail}>Coordinated Universal Time</span>
          </div>
        </div>
      </div>
    </div>
  )
}
