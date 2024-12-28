import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList, onClose }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map((toast) => {
        return (
          <li id={toast.id} className={styles.toastWrapper} key={toast.id}>
            <Toast variant={toast.variant} id={toast.id} onClose={onClose}>
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
