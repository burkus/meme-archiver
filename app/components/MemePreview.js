import React, {Component} from 'react';
import styles from './MemePreview.css';

type Props = {
    src: string,
    width: number,
    height: number
}
export default function MemePreview (props: Props) {
    const {src, width, height} = props;
    return (
        <div className={styles.container}>
            <img src={src} width={width} height={height}></img>
        </div>
    );
}