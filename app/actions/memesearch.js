// @flow
import {GetState, Dispatch} from '..reducers/types';
const {dialog} = require('electron').remote;
const fs = require('fs');

export const GET_MEMES = "GET_MEMES";
export const SET_MEMES_FOLDER = "SET_MEMES_FOLDER";

export function getMemes() {
    return {
        type: GET_MEMES,
        memes
    }
}

export function setMemesFolder(path: string) {
    return {
        type: SET_MEMES_FOLDER,
        path
    }
}

export function showDialogForMemesFolder() {
    let fileName = null;
    dialog.showOpenDialog({
        title: "Select a folder",
        properties: ["openDirectory"]
    }, fn => {
        fileName = fn;
    });
    return fileName;
}

export function getMemesFromFolder(path: string) {
    const files = fs.readdirSync(path);
    return files;
}