import React, { Component, Fragment } from 'react';
import styles from "./css/cards.module.css";
import Card from './Card';
import matte from "../images/matte8.jpg"
import nano from "../images/nano 5.jpg"
import privacy from "../images/nano6.jpg"
import polymer from "../images/nano7.jpg"

export default class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={matte} name="Iphone X" cost="500$"/>
        <Card image={nano} name="Iphone 11" cost="800$"/>
        <Card image={privacy} name="Iphone 13" cost="1000$"/>
        <Card image={polymer} name="Iphone 14" cost="1500$"/>
      </div>
    )
  }
}
