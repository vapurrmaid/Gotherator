import React, { useState } from 'react';
import axios from 'axios';

import styles from './UsernameForm.module.css';

interface UsernameResponse { // TODO
  username: string;
}

export const UsernameForm: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios.get<UsernameResponse>('/username/random').then((res) => {
      if (res.data && res.data.username) {
        setUserName(res.data.username);
      }
    }).catch((err) => {
      console.log(err); // TODO
    })
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>

      <fieldset className={styles.form__section}>
        <label className={styles.hidden} htmlFor="userName">Generated Value:</label>
        <input className={styles.form__username} id="userName" readOnly value={userName} />
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
