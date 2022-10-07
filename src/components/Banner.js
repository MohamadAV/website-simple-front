import React from "react";
import styles from "./css/Banner.module.css";
import banner from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="#" />
      <div className={styles.textContainer}>
        <h1>Nostrud ut minim cillum ex mollit.</h1>
        <p>
          Voluptate sint adipisicing adipisicing qui excepteur occaecat officia.
        </p>
      </div>{" "}
    </div>
  );
};

export default Banner;
