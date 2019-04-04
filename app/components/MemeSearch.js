// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routes from '../constants/routes';
import styles from './MemeSearch.css';
import {
    showDialogForMemesFolder,
    getFilesFromFolder
} from '../actions/memesearch';
import MemePreview from './MemePreview';
import bulma from 'bulma/css/bulma.css';

type Props = {};

export default class MemeSearch extends Component<Props> {
    props: Props

    constructor(props) {
        super(props);
        this.handleSetMemesClicked = this.handleSetMemesClicked.bind(this);
    }

    componentWillMount() {
        console.log(this.props);
    }

    handleSetMemesClicked() {
        const folderName = showDialogForMemesFolder();
        this.props.setMemesFolder(folderName);
    }

    renderMemePreviews() {
        const exp = /.*(.jpg|.png)$/;
        const width: number = 96;
        const height: number = width;
        const files = getFilesFromFolder(this.props.memesFolder);
        let previews = files
                .filter(e => exp.exec(e))
                .map((file, i) => 
            <MemePreview src={file} width={width} height={height} key={i}/>);
        return (
            <div className={styles.memePreviewContainer}>
                {previews}
            </div>
        );
    }

    renderSetMemesFolderButton() {
        return (
            <div className={styles.setMemesFolder}>
                <button onClick={this.handleSetMemesClicked}
                        className={bulma.button}
                        >
                    Set memes folder
                </button>
            </div>
        );
    }

    render() {
        return(
            <div>
                <div className={styles.backButton}>
                   <Link to={routes.HOME} className={bulma.button}>
                    Home
                   </Link>
                </div>
                {this.renderSetMemesFolderButton()}
                <div className={styles.container}>
                    <div>
                        <h1 className={styles.title}>
                            Meme Search
                        </h1>
                    </div>
                    <div>
                        {this.renderMemePreviews()}
                    </div>
                    
                </div>
            </div>
            
        );
    }
}