import React, {Component} from 'react';
import styles from './MemePreview.css';
import bulma from 'bulma/css/bulma.css';

type Props = {
    src: string,
    width: number,
    height: number
}
export default function MemePreview (props: Props) {
    const {src, width, height} = props;
    return (
        <div className={styles.container}>
            <figure className={bulma.image, bulma['is-128x128']}>
                <img src={src} width={width} height={height}></img>
            </figure>
        </div>
    );
}