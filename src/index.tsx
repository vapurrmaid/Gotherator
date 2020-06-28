import React from "react";
import ReactDOM from "react-dom";
import { stylesheet } from "typestyle";
import { Generator } from "./Generator";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const styles = stylesheet({
  pageHead: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },

  pageContent: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <>
      <header className={styles.pageHead}>
        <h1>Gotherator</h1>
      </header>

      <main className={styles.pageContent}>
        <Generator />
      </main>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
