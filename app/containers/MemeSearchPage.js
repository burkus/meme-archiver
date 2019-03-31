import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MemeSearch from '../components/MemeSearch.js';
import {getMemes, setMemesFolder} from '../actions/memesearch';

function mapStateToProps(state) {
    return {
        memes: state.memes,
        memesFolder: state.memesFolder
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getMemes, setMemesFolder}, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemeSearch);