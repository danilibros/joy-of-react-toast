import React from "react";
import toast from "../../../assets/toast.png";
import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastList, setToastList] = React.useState([]);
  const [messageText, setMessageText] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const onToastDismiss = (id) => {
    // filter out removed toast by id
    setToastList(toastList.filter((toast) => toast.id !== id));
  };

  const addToast = () => {
    const newToast = {
      id: crypto.randomUUID(),
      variant: selectedVariant,
      message: messageText,
    };
    setToastList([...toastList, newToast]);

    // reset message and variant to defaults
    setMessageText("");
    setSelectedVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src={toast} />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastList={toastList} onClose={onToastDismiss} />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          addToast();
        }}
      >
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
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
