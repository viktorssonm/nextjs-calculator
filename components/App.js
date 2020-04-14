import React, { useEffect, useState } from "react";
import styles from "./scss/App.module.scss";
import Calculator from "../utils/Calculator";
const calculator = new Calculator();

const App = (props) => {
  const [displayValue, setDisplayValue] = useState();

  const onClick = (event) => {
    calculator.handleButtonInput(event.target.textContent);
    setDisplayValue(calculator.currentOperand);
  };

  useEffect(() => {
    setDisplayValue(calculator.currentOperand);
  });

  const renderNumber = (value) => {
    const number = parseFloat(value);
    if (isNaN(number)) return "";
    return number;
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}>{renderNumber(displayValue)}</div>
        <div className={styles.keyboard}>
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
            data-operation
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
            data-operation
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
            data-operation
            className={`${styles.digit} ${styles.funcbutton}`}
            onClick={onClick}
          >
            -
          </div>
          <div className={styles.digit} onClick={onClick}>
            1
          </div>
          <div className={styles.digit} onClick={onClick}>
            2
          </div>
          <div className={styles.digit} onClick={onClick}>
            3
          </div>
          <div
            data-operation
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
            data-exec
            className={`${styles.digit} ${styles.funcbutton}`}
            onClick={onClick}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
