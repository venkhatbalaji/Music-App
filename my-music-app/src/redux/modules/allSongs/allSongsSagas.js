import { put, fork, takeLatest, all} from 'redux-saga/effects';
import { UPDATE_ALL_SONGS, UPDATE_ALL_SONGS_ASYNC } from './allSongs';

export function* updateSongsWatcher() {
    yield takeLatest(UPDATE_ALL_SONGS_ASYNC, updateSongsWorker);
}

export function* updateSongsWorker({ payload: {data, updated} } ) {
    try {
        if(data){
            yield put({
                type: UPDATE_ALL_SONGS,
                payload:{
                    data, 
                    updated
                }
            });
        }            
    } catch (e) {
        console.log(e);
    }
}

export default function* allSongsSagas(){
    yield all([
        fork(updateSongsWatcher)
    ]);
}