import React from 'react';
// import axios from 'axios';

import styles from './UsernameForm.module.css';

export const UsernameForm: React.FC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('GET');
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>

      <fieldset className={styles.form__section}>
        <label className={styles.hidden} htmlFor="userName">Generated Value:</label>
        <input className={styles.form__username} id="userName" readOnly />
      </fieldset>

      <fieldset className={styles.form__section}>
        <button
          className={`${styles.btn} ${styles.form__filter}`}
          type="button"
        >
          Filter 1
        </button>
        <button
          className={`${styles.btn} ${styles.form__filter}`}
          type="button"
        >
          Filter 2
        </button>
        <button
          className={`${styles.btn} ${styles.form__filter}`}
          type="button"
        >
          Filter 3
        </button>
      </fieldset>

      <fieldset className={styles.form__section}>
        <button className={`${styles.btn} ${styles.form__submit}`} type="submit">Generate</button>
      </fieldset>

    </form >
  );

}
