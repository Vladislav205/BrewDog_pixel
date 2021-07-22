import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Link className={styles.link} to="/"><h3>PixelTeh BrewDog</h3>  </Link>
        <nav>
          <Link className={styles.link} to="/Beerwithpizza">
            Beer with pizza
          </Link>
          <Link className={styles.link} to="/Beerwithsteak">
            Beer with steak
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
