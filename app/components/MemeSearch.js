// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routes from '../constants/routes';
import styles from './MemeSearch.css';

type Props = {};

export default class MemeSearch extends Component<Props> {
    props: Props

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className={styles.backButton} data-tid="backButton">
                   <Link to={routes.HOME}>
                    Home
                   </Link>
                </div>
                <div>
                    <h1>Search</h1>
                </div>
            </div>
        );
    }
}