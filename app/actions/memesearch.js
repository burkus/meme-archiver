// @flow
import {GetState, Dispatch} from '../reducers/types';
import Meme from '../models/meme';
const {dialog} = require('electron').remote;
const fs = require('fs');

export const GET_MEMES = "GET_MEMES";
export const SET_MEMES_FOLDER = "SET_MEMES_FOLDER";
export const SET_SEARCH_STRING = "SET_SEARCH_STRING";
export const SORT_MEMES = "SORT_MEMES";

export function sortMemes(sortExpression) {
    return {
        type: SORT_MEMES,
        sortExpression
    };
}

export function setSearchString(search: string) {
    return {
        type: SET_SEARCH_STRING,
        searchString: search
    };
}

export function getMemes(memes: Array<string>) {
    return {
        type: GET_MEMES,
        memes
    };
}

export function setMemesFolder(path: string) {
    return {
        type: SET_MEMES_FOLDER,
        path
    };
}

export function showDialogForMemesFolder() {
    let fileName = dialog.showOpenDialog({
        title: "Select a folder",
        properties: ["openDirectory"]
    });
    return fileName[0];
}

export function getFilesFromFolder(path: string) {
    let files = [];
    if(path === '' || path === null) {
        return files;
    }
    try {
        files = fs.readdirSync(path);
    } catch(error) {
        console.log(error);
    }
    files = files.map(f => path + '/' + f);
    return files;
}

export function createPrefixComparatorFromString(prefix: string, ascending: Boolean = true) {
    return function compare(a: Meme, b: Meme) {
        a = a.name;
        b = b.name;
        let countA = 0;
        let countB = 0;

        for(let i = 0; i < a.length; i++) {
            if(a.charAt(i) === prefix.charAt(i)) {
                countA++;
            }
        }

        for(let i = 0; i < b.length; i++) {
            if(b.charAt(i) === prefix.charAt(i)) {
                countB++;
            }
        }

        if(ascending) {
            return countA - countB;
        }
        return countB - countA;
    }
}

