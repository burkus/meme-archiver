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
        this.getMemes = this.getMemes.bind(this);
        this.handleSearchBarUpdate = this.handleSearchBarUpdate.bind(this);
    }

    componentWillMount() {
        console.log(this.props);
        this.getMemes();
    }

    handleSetMemesClicked() {
        const folderName = showDialogForMemesFolder();
        this.props.setMemesFolder(folderName);
        this.getMemes(folderName);
    }

    getMemes(memesFolder: ?string) {
        const exp = /.*(.jpg|.png|.gif)$/;
        const folder = memesFolder != null ? memesFolder : this.props.memesFolder;
        const files = getFilesFromFolder(folder)
                        .filter(e => exp.exec(e));
        this.props.getMemes(files);
    }

    renderMemePreviews() {
        const width: number = 96;
        const height: number = width;
        const previews = this.props.memes
                .map((file, i) => 
                    <MemePreview
                        src={file}
                        width={width}
                        height={height} 
                        name={file}
                        key={i}
                    />);
        return (
            <div className={styles.memePreviewContainer}>
                <div className={styles.s}>
                {previews}
                </div>
            </div>
        );
    }

    handleSearchBarUpdate() {

    }

    renderSearchBar() {
        return (
            <div className={styles.memeSearchContainer}>
                <i className={"fas fa-search fa-3x"}/>
                <div>
                    <div className={styles.memeSearchInput}>
                    <input
                        className={styles.memeSearchBar}
                        type={"text"}
                        placeholder={""}
                        onChange={this.handleSearchBarUpdate}
                        autoFocus={true}
                        >
                        </input>
                    </div>
                </div>
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
                <div className={bulma.box, styles.container}>
                    <div>
                        {this.renderSearchBar()}
                    </div>
                    <div>
                        {this.renderMemePreviews()}
                    </div>
                    
                </div>
            </div>
            
        );
    }
}