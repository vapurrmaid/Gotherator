import React from 'react';
import './Layout.css'

export const Layout: React.FC = ({ children }) => (
  <>

    <header className="page-head">
      <h1>Gotherator</h1>
    </header>

    <main className="page-content">
      {children}
    </main>

    {/* TODO
    <footer className="page-foot">
      <h2>Gotherator Footer</h2>
    </footer>*/}

  </>
);
