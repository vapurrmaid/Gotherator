import React, { useState } from "react";
import { stylesheet } from "typestyle";
import { GrammarStream } from "./domain/service/GrammarStream";
import { StreamFormatter } from "./domain/service/StreamFormatter";

export const Generator: React.FC = () => {
  const [userName, setUserName] = useState<string>("");

  return (
    <form className={styles.form}>
      <label style={{ display: "none" }} htmlFor="userName">
        Generated Value:
      </label>

      <input
        className={styles.formUsername}
        id="userName"
        placeholder="Generated result..."
        readOnly
        value={userName}
      />

      <button
        className={styles.formSubmit}
        onClick={(e) => {
          e.preventDefault();
          const stream = new GrammarStream();
          const streamFormatter = new StreamFormatter(stream.value);
          setUserName(streamFormatter.toDecoratedString());
        }}
        type="submit"
      >
        Generate
      </button>
    </form>
  );
};

const styles = stylesheet({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "900px",
    padding: "10px",
    textAlign: "center",
    width: "100%",
  },

  formUsername: {
    border: "none",
    borderRadius: "4px",
    display: "block",
    fontFamily: "Lora, serif",
    lineHeight: "40px",
    margin: "0 auto",
    padding: "0 10px",
    textAlign: "center",
    width: "100%",
  },

  formSubmit: {
    backgroundColor: "#5c00ff",
    borderRadius: "4px",
    borderStyle: "none",
    color: "white",
    cursor: "pointer",
    fontFamily: "Lora, serif",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "3px",
    lineHeight: "50px",
    marginTop: "10px",
    maxWidth: "900px",
    transition: "all .2s",
    width: "100%",
    $nest: {
      "&:active, &:hover": {
        backgroundColor: "#2b0076",
      },
    },
  },
});
