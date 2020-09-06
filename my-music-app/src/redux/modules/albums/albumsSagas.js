import { put, fork, takeLatest, all, call } from 'redux-saga/effects';
import { GET_ALBUMS_ASYNC, GET_ALBUMS } from './albums';
import request from '../../../util/request';

export function* getAlbumsWatcher() {
    yield takeLatest(GET_ALBUMS_ASYNC, getAlbumsWorker);
}

export function* getAlbumsWorker() {
    try {
        const data = yield call(request,'https://jsonplaceholder.typicode.com/photos');
        if(data){
            yield put({
                type: GET_ALBUMS,
                payload:{
                    data: data,
                }
            })
        }            
    } catch (e) {
        console.log(e);
    }
}

export default function* albumsSagas(){
    yield all([
        fork(getAlbumsWatcher)
    ]);
}