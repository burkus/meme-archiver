// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import {memes, memesFolder, searchString} from './memesearch';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter,
    memes,
    memesFolder,
    searchString
  });
}
