import React from 'react';
import bulma from 'bulma/css/bulma.css';
import styles from './MemePreview.css';

type Props = {
    src: string,
    width: number,
    height: number,
    name: string
};

function processName(name: string) {
    let last = name.lastIndexOf('/');
    if(last === null) {
        last = name.lastIndexOf('\\');
    }

    if(last === -1) {
        return 'Name could not be found';
    }

    const fileExt = name.lastIndexOf('.');

    if(fileExt !== -1) {
        return name.substring(last + 1, fileExt);
    }
   
    return name.substr(last + 1);
}

export default function MemePreview (props: Props) {
    const {src, width, height} = props;
    return (
        <div className={bulma.box}>
            <div className={bulma.level}>
            <figure className={bulma.image, bulma['level-item'], bulma['level-left']}>
                <img src={src} width={width} height={height}></img>
            </figure>
            <div className={bulma['level-right']}>
                    <p>{processName(props.name)}</p>
                </div>
            </div>
        </div>
    );
}