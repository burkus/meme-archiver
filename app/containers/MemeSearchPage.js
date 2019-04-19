import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MemeSearch from '../components/MemeSearch.js';
import {getMemes, setMemesFolder, setSearchString} from '../actions/memesearch';

function mapStateToProps(state) {
    return {
        memes: state.memes,
        memesFolder: state.memesFolder,
        searchString: state.search
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getMemes, setMemesFolder, setSearchString}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemeSearch);