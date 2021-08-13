
import {
    call,
    put,
    takeEvery,
    all,
    fork
} from 'redux-saga/effects';
import {
    READ_INITIAL_INFORMATION,
} from './constants';

import {
    readInitialInformationFailed,
    readInitialInformationSuccess,
    readKnowledgeSuccess,
    readPortfolioSuccess,
    readResumeSuccess,
    readAboutMeSuccess

} from './../actions';
import { getInitialInformationData } from './../../firebase/initialInformation/index';

function* getInitialInformation() {
    try {
        const {
            aboutMe = {},
            knowledge = [],
            portfolio = [],
            resume = []
        } = yield call(getInitialInformationData);

        yield put(readAboutMeSuccess(aboutMe));
        yield put(readPortfolioSuccess({ portfolio }));

        const studies = resume.filter(r => r.type === 'studies');
        const workExperiencies = resume.filter(r => r.type === 'workExperience');
        yield put(readResumeSuccess({ studies, workExperiencies }));

        const skills = knowledge.filter(k => k.type === 'skill');
        const studying = knowledge.filter(k => k.type === 'studying');

        yield put(readKnowledgeSuccess({ skills, studying }));

        yield put(readInitialInformationSuccess({}))
    } catch ({ message }) {
        yield put(readInitialInformationFailed(message));
    }
}

export function* watchGetInitialInformation() {
    yield takeEvery(READ_INITIAL_INFORMATION, getInitialInformation)
}

function* InitialInformationSaga() {
    yield all([
        fork(watchGetInitialInformation)
    ]);
}

export default InitialInformationSaga;