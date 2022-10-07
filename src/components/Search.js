import React, { Component } from 'react';
import styles from "./css/search.module.css";


export default class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>search what you want</p>
        <input placeholder='Search ...' />
        </div>
    )
  }
}
