import {
    GET_MEMES,
    SET_MEMES_FOLDER,
    SET_SEARCH_STRING,
    SORT_MEMES
} from '../actions/memesearch';
import {Action} from './types';

export function memes(state: [] = [], action: Action) {
    switch(action.type) {
        case GET_MEMES:
            return state = action.memes;
        case SORT_MEMES:
            return state = state.sort(action.sortExpression);
        default:
            return state;
    }
}

export function memesFolder(state: string = "", action: Action) {
    switch(action.type) {
        case SET_MEMES_FOLDER:
            return state = action.path;
        default:
            return state;
    }
}

export function searchString(state: string = "", action: Action) {
    switch(action.type) {
        case SET_SEARCH_STRING:
            return state = action.searchString;
        default:
            return state;
    }
}