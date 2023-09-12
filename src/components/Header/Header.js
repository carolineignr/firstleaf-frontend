import styles from './Header.module.scss';

export default function Header() {
  const text = 'Countries Of The World';
  return (
    <header className={styles.header}>
      <span className={`${styles.title}`}>{text}</span>
      <span className={`${styles.title} ${styles.animateTitle2}`}>{text}</span>
      <span className={`${styles.title} ${styles.animateTitle3}`}>{text}</span>
      <span className={`${styles.title} ${styles.animateTitle4}`}>{text}</span>
    </header>
  )
}