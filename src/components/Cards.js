import React, { Component, Fragment } from 'react';
import styles from "./css/cards.module.css";
import Card from './Card';
import iphone11 from "../images/iphone11.webp"
import iphone12 from "../images/iphone12.jpg"
import iphone13 from "../images/iphone13.jpeg"
import iphone14 from "../images/iphone14.jpg"

export default class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={iphone11} name="Iphone X" cost="500$"/>
        <Card image={iphone12} name="Iphone 11" cost="800$"/>
        <Card image={iphone13} name="Iphone 13" cost="1000$"/>
        <Card image={iphone14} name="Iphone 14" cost="1500$"/>
      </div>
    )
  }
}
