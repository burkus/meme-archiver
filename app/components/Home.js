// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <h2>Home</h2>
        <p>
          <Link to={routes.COUNTER}>To Counter</Link>
        </p>
        <p>
          <Link to={routes.MEME_SEARCH}>Meme Search</Link>
        </p>
      </div>
    );
  }
}
