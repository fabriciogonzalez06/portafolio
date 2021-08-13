
import {
    call,
    put,
    takeEvery,
    all,
    fork
} from 'redux-saga/effects';
import {
    READ_KNOWLEDGE,
    CREATE_KNOWLEDGE,
    UPDATE_KNOWLEDGE,
    DELETE_KNOWLEDGE,
} from './constants';

import {
    readKnowledgeFailed,
    readKnowledgeSuccess,

    createKnowledgeFailed,
    createKnowledgeSuccess,

    updateKnowledgeFailed,
    updateKnowledgeSuccess,

    deleteKnowledgeFailed,
    deleteKnowledgeSuccess
} from './../actions';
import {
    getKnowledgeData,
    createKnowledgeData,
    updateKnowledgeData,
    deleteKnowledgeData
} from './../../firebase/knowledge';

function* getKnowledge() {
    try {
        const data = yield call(getKnowledgeData);
        yield (put(readKnowledgeSuccess(data)))
    } catch ({ message }) {
        yield put(readKnowledgeFailed(message));
    }
}

function* createKnowledge({ payload }) {
    try {
        const data = yield call(createKnowledgeData, payload);
        yield (put(createKnowledgeSuccess(data)))
    } catch ({ message }) {
        yield put(createKnowledgeFailed(message));
    }
}

function* updateKnowledge({ id, payload }) {
    try {
        const data = yield call(updateKnowledgeData, id, payload);
        yield (put(updateKnowledgeSuccess(data)))
    } catch ({ message }) {
        yield put(updateKnowledgeFailed(message));
    }
}

function* deleteKnowledge({ id }) {
    try {
        const data = yield call(deleteKnowledgeData, id);
        yield (put(deleteKnowledgeSuccess(data)))
    } catch ({ message }) {
        yield put(deleteKnowledgeFailed(message));
    }
}

export function* watchGetKnowledge() {
    yield takeEvery(READ_KNOWLEDGE, getKnowledge)
}

export function* watchCreateKnowledge() {
    yield takeEvery(CREATE_KNOWLEDGE, createKnowledge)
}

export function* watchUpdateKnowledge() {
    yield takeEvery(UPDATE_KNOWLEDGE, updateKnowledge)
}

export function* watchDeleteKnowledge() {
    yield takeEvery(DELETE_KNOWLEDGE, deleteKnowledge)
}

function* KnowledgeSaga() {
    yield all([
        fork(watchGetKnowledge),
        fork(watchCreateKnowledge),
        fork(watchUpdateKnowledge),
        fork(watchDeleteKnowledge),
    ]);
}

export default KnowledgeSaga;