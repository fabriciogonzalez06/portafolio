import { 
    //call, 
    put, 
    takeEvery, 
    all, 
    fork } from 'redux-saga/effects';
import { 
    READ_ABOUT_ME, 
    //READ_ABOUT_ME_FAILED, 
    //READ_ABOUT_ME_SUCCESS
 } from './constants';
import { readAboutMeFailed, readAboutMeSuccess } from './actions';

function* getAboutMe() {
    try {
        yield (put(readAboutMeSuccess({})))
    } catch ({ message }) {
        yield put(readAboutMeFailed(message));
    }
}

export function* watchGetAboutMe() {
    yield takeEvery(READ_ABOUT_ME, getAboutMe)
}

function* AboutMeSaga() {
    yield all([
        fork(watchGetAboutMe)
    ]);
}

export default AboutMeSaga;