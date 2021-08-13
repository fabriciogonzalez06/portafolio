
import {
    call,
    put,
    takeEvery,
    all,
    fork
} from 'redux-saga/effects';
import {
    READ_RESUME,
    CREATE_RESUME,
    UPDATE_RESUME,
    DELETE_RESUME,
} from './constants';

import {
    readResumeFailed,
    readResumeSuccess,

    createResumeFailed,
    createResumeSuccess,

    updateResumeFailed,
    updateResumeSuccess,

    deleteResumeFailed,
    deleteResumeSuccess
} from '../actions';
import {
    getResumeData,
    createResumeData,
    updateResumeData,
    deleteResumeData
} from '../../firebase/resume/index';

function* getResume() {
    try {
        const data = yield call(getResumeData);
        yield (put(readResumeSuccess(data)))
    } catch ({ message }) {
        yield put(readResumeFailed(message));
    }
}

function* createResume({ payload }) {
    try {
        const data = yield call(createResumeData, payload);
        yield (put(createResumeSuccess(data)))
    } catch ({ message }) {
        yield put(createResumeFailed(message));
    }
}

function* updateResume({ id, payload }) {
    try {
        const data = yield call(updateResumeData, id, payload);
        yield (put(updateResumeSuccess(data)))
    } catch ({ message }) {
        yield put(updateResumeFailed(message));
    }
}

function* deleteResume({ id }) {
    try {
        const data = yield call(deleteResumeData, id);
        yield (put(deleteResumeSuccess(data)))
    } catch ({ message }) {
        yield put(deleteResumeFailed(message));
    }
}

export function* watchGetResume() {
    yield takeEvery(READ_RESUME, getResume)
}

export function* watchCreateResume() {
    yield takeEvery(CREATE_RESUME, createResume)
}

export function* watchUpdateResume() {
    yield takeEvery(UPDATE_RESUME, updateResume)
}

export function* watchDeleteResume() {
    yield takeEvery(DELETE_RESUME, deleteResume)
}

function* ResumeSaga() {
    yield all([
        fork(watchGetResume),
        fork(watchCreateResume),
        fork(watchUpdateResume),
        fork(watchDeleteResume),
    ]);
}

export default ResumeSaga;