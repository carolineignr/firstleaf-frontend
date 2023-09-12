import styles from './Header.module.scss';

export default function Header() {
  const text = 'Countries Of The World';
  return (
    <header className={styles.header}>
      <span className={styles.title}>{text}</span>
      <span className={`${styles.title} ${styles.title2}`}>{text}</span>
      <span className={`${styles.title} ${styles.title3}`}>{text}</span>
      <span className={`${styles.title} ${styles.title4}`}>{text}</span>
    </header>
  )
}