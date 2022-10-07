import React, { Component, Fragment } from "react";
import styles from "./css/Navbar.module.css";
import logo from "../images/Logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <header className={styles.header}>
          <div className={styles.listContainer}>
            <ul className={styles.list}>
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className={styles.logo}>
            <a href="/">
              <img className={styles.logo} src={logo} alt="Logo" />
            </a>
          </div>
        </header>
      </Fragment>
    );
  }
}
