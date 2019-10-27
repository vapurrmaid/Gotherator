import React from 'react';
import { Layout } from '../../layout/Layout';
import { UsernameForm } from './UsernameForm';

import styles from './Generator.module.css';

export const Generator: React.FC = () => {
  return (
    <Layout>

      <div className={styles.container}>
        <UsernameForm />
      </div>

    </Layout>
  );
}
