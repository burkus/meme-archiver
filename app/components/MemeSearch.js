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
        let folderName = showDialogForMemesFolder();
        console.log(folderName);
        this.props.setMemesFolder(folderName);
    }

    renderMemePreviews() {
        const exp = /.*(.jpg|.png)$/;
        const width: number = 150;
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
            <div>
                <button onClick={this.handleSetMemesClicked}>Set memes folder</button>
            </div>
        );
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
                <div>
                    {this.renderSetMemesFolderButton()}
                </div>
                <div>
                    {this.renderMemePreviews()}
                </div>
            </div>
        );
    }
}