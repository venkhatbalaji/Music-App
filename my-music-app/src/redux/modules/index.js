import { combineReducers } from 'redux';
import albums from './albums/albums';
import allSongs from './allSongs/allSongs';

const rootReducer = combineReducers({
    albums,
    allSongs
});

export default rootReducer;