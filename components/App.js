import React from "react";
import styles from "./scss/App.module.scss";

const App = (props) => {
  const onClick = (event) => {
    console.log(event.target.textContent);
    event.stopPropagation();
  };

  return (
    <div className={styles.container}>
      <div className={styles.display} onClick={onClick}>
        015105
      </div>
      <div className={styles.keyboard} onClick={onClick}>
        <div className={`${styles.digit}`} onClick={onClick}>
          AC
        </div>
        <div className={styles.digit} onClick={onClick}>
          +/-
        </div>
        <div className={styles.digit} onClick={onClick}>
          %
        </div>
        <div
          className={`${styles.digit} ${styles.funcbutton}`}
          onClick={onClick}
        >
          /
        </div>
        <div className={styles.digit} onClick={onClick}>
          7
        </div>
        <div className={styles.digit} onClick={onClick}>
          8
        </div>
        <div className={styles.digit} onClick={onClick}>
          9
        </div>
        <div
          className={`${styles.digit} ${styles.funcbutton}`}
          onClick={onClick}
        >
          x
        </div>
        <div className={styles.digit} onClick={onClick}>
          4
        </div>
        <div className={styles.digit} onClick={onClick}>
          5
        </div>
        <div className={styles.digit} onClick={onClick}>
          6
        </div>
        <div
          className={`${styles.digit} ${styles.funcbutton}`}
          onClick={onClick}
        >
          -
        </div>
        <div
          className={styles.digit}
          id="1"
          onClick={onClick}
          onClick={onClick}
        >
          1
        </div>
        <div className={styles.digit} onClick={onClick}>
          2
        </div>
        <div className={styles.digit} onClick={onClick}>
          3
        </div>
        <div
          className={`${styles.digit} ${styles.funcbutton}`}
          onClick={onClick}
        >
          +
        </div>
        <div className={styles.digit} onClick={onClick}>
          0
        </div>
        <div className={styles.digit} onClick={onClick}>
          ,
        </div>
        <div
          className={`${styles.digit} ${styles.funcbutton}`}
          onClick={onClick}
        >
          =
        </div>
      </div>
    </div>
  );
};

export default App;
