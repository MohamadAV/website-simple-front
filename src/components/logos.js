import React from "react";
import styles from "./css/logos.module.css";

import apple from "../images/apple.jpg";
import samsung from "../images/samsung.jpg";
import xiaomi from "../images/xiaomei.jpg";

export  const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>Who support US?</h3>
      <div>
        <img src={apple} alt="logo" />
        <img src={samsung} alt="logo" />
        <img src={xiaomi} alt="logo" />
      </div>
    </div>
  );
};
