import {GET_MEMES, SET_MEMES_FOLDER} from '../actions/memesearch';
import {Action} from './types';

export function memes(state: [] = [], action: Action) {
    switch(action.type) {
        case GET_MEMES:
            return state.concat(action.memes);
        default:
            return state;
    }
}

export function memesFolder(state: string, action: Action) {
    switch(action.type) {
        case SET_MEMES_FOLDER:
            return state = action.path;
        default:
            return state;
    }
}