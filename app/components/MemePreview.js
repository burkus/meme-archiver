import React from 'react';
import bulma from 'bulma/css/bulma.css';
import styles from './MemePreview.css';

type Props = {
    src: string,
    width: number,
    height: number,
    name: string
};

export default function MemePreview (props: Props) {
    const {src, width, height} = props;
    return (
        <div className={bulma.box}>
            <div className={bulma.level}>
            <figure className={bulma['level-item'], bulma['level-left']}>
                <img src={src} width={width} height={height} alt={"whoops, couldn't load"}></img>
            </figure>
            <div className={bulma['level-right']}>
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    );
}