import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/dvdgd.png" alt="David Dutra" />
      <div>
        <strong>David Dutra</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
          </p>
      </div>
    </div>
  );
}
