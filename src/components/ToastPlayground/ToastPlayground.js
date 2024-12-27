import React from "react";
import toast from "../../../assets/toast.png";
import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [isToastVisible, setIsToastVisible] = React.useState(false);
  const [messageText, setMessageText] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const onToastDismiss = () => {
    setIsToastVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src={toast} />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && (
        <Toast variant={selectedVariant} onClose={onToastDismiss}>
          {messageText}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={messageText}
              onChange={(event) => {
                setMessageText(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option, index) => {
              return (
                <label key={index} htmlFor={`variant-${option}`}>
                  <input
                    type="radio"
                    id={`variant-${option}`}
                    key={index}
                    name={option}
                    value={option}
                    checked={selectedVariant === option}
                    onChange={(event) => {
                      setSelectedVariant(event.target.value);
                    }}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setIsToastVisible(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
