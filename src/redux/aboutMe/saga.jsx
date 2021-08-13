
import {
    call,
    put,
    takeEvery,
    all,
    fork
} from 'redux-saga/effects';
import {
    READ_ABOUT_ME,
    //READ_ABOUT_ME_FAILED, 
    //READ_ABOUT_ME_SUCCESS
} from './constants';

import { readAboutMeFailed, readAboutMeSuccess } from './actions';
import { getAboutMeData } from './../../firebase/aboutMe/index';

function* getAboutMe() {
    try {
        const data = yield call(getAboutMeData);
        yield (put(readAboutMeSuccess(data)))
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