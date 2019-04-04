// @flow
import {GetState, Dispatch} from '../reducers/types';
const {dialog} = require('electron').remote;
const fs = require('fs');

export const GET_MEMES = "GET_MEMES";
export const SET_MEMES_FOLDER = "SET_MEMES_FOLDER";

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