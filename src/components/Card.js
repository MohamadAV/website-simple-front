import React, { Component } from "react";
import styles from "./css/card.module.css";

export default class Card extends Component {
  render() {
    const { image, name, cost } = this.props;
    return (
      <div className={styles.container}>
        <img src={image} alt="iphone image" />
        <h3>{name}</h3>
        <p>{cost}</p>
      </div>
    );
  }
}
