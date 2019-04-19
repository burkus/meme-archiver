import React, {Component} from 'react';
const { clipboard } = require('electron');
import bulma from 'bulma/css/bulma.css';
import styles from './MemePreview.css';

type Props = {
    src: string,
    width: number,
    height: number,
    name: string
};

export default class MemePreview extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        clipboard.writeImage(this.props.src);
    }

    render() {
        const {src, width, height} = this.props;
        return (
            <div className={bulma.box}>
                <div className={bulma.level}>
                <figure className={bulma['level-item'], bulma['level-left']}>
                    <img
                        src={src}
                        width={width}
                        height={height}
                        alt={"whoops, couldn't load"}
                        >
                    </img>
                </figure>
                <p>{this.props.name}</p>
                    <div className={bulma['level-right']}>
                        
                        <button
                            className={bulma.button}
                            onClick={this.handleClick}
                            >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}