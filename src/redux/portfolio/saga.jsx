
import {
    call,
    put,
    takeEvery,
    all,
    fork
} from 'redux-saga/effects';
import {
    READ_PORTFOLIO,
    CREATE_PORTFOLIO,
    UPDATE_PORTFOLIO,
    DELETE_PORTFOLIO,
} from './constants';

import {
    readPortfolioFailed,
    readPortfolioSuccess,

    createPortfolioFailed,
    createPortfolioSuccess,

    updatePortfolioFailed,
    updatePortfolioSuccess,

    deletePortfolioFailed,
    deletePortfolioSuccess
} from '../actions';
import {
    getPortfolioData,
    createPortfolioData,
    updatePortfolioData,
    deletePortfolioData
} from '../../firebase/portfolio/index';

function* getPortfolio() {
    try {
        const data = yield call(getPortfolioData);
        yield (put(readPortfolioSuccess(data)))
    } catch ({ message }) {
        yield put(readPortfolioFailed(message));
    }
}

function* createPortfolio({ payload }) {
    try {
        const data = yield call(createPortfolioData, payload);
        yield (put(createPortfolioSuccess(data)))
    } catch ({ message }) {
        yield put(createPortfolioFailed(message));
    }
}

function* updatePortfolio({ id, payload }) {
    try {
        const data = yield call(updatePortfolioData, id, payload);
        yield (put(updatePortfolioSuccess(data)))
    } catch ({ message }) {
        yield put(updatePortfolioFailed(message));
    }
}

function* deletePortfolio({ id }) {
    try {
        const data = yield call(deletePortfolioData, id);
        yield (put(deletePortfolioSuccess(data)))
    } catch ({ message }) {
        yield put(deletePortfolioFailed(message));
    }
}

export function* watchGetPortfolio() {
    yield takeEvery(READ_PORTFOLIO, getPortfolio)
}

export function* watchCreatePortfolio() {
    yield takeEvery(CREATE_PORTFOLIO, createPortfolio)
}

export function* watchUpdatePortfolio() {
    yield takeEvery(UPDATE_PORTFOLIO, updatePortfolio)
}

export function* watchDeletePortfolio() {
    yield takeEvery(DELETE_PORTFOLIO, deletePortfolio)
}

function* PortfolioSaga() {
    yield all([
        fork(watchGetPortfolio),
        fork(watchCreatePortfolio),
        fork(watchUpdatePortfolio),
        fork(watchDeletePortfolio),
    ]);
}

export default PortfolioSaga;