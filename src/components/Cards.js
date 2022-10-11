import React, { Component } from "react";
import styles from "./css/cards.module.css";
import Card from "./Card";
import iphone11 from "../images/iphone11.webp";
import iphone12 from "../images/iphone12.jpg";
import iphone13 from "../images/iphone13.jpeg";
import iphone14 from "../images/iphone14.jpg";
import { v4 } from "uuid";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { image: iphone11, name: "Iphone 11", cost: "500 $" },
        { image: iphone12, name: "Iphone 12", cost: "800 $" },
        { image: iphone13, name: "Iphone 13", cost: "1000 $" },
        { image: iphone14, name: "Iphone 14", cost: "1500 $" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.phoneData.map((phone) => {
          return (
            <Card
              key={v4()}
              image={phone.image}
              name={phone.name}
              cost={phone.cost}
            />
          );
        })}
      </div>
    );
  }
}
