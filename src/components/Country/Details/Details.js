import styles from './Details.module.scss';

export default function Details({ onClose, country }) {
  return (
    <div id='modal' className={styles.modal}>
      <div className={styles.modalContent}>
        <button onClick={onClose}>Close</button>
        <div>I'm a modal dialog</div>
      </div>
    </div>
  )
}