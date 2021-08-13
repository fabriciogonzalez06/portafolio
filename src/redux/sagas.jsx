import { all } from 'redux-saga/effects';

import AboutMeSaga from './aboutMe/saga';
import KnowledgeSaga from './knowledge/saga';
import ResumeSaga from './resume/saga';
import PortfolioSaga from './portfolio/saga';
import InitialInformationSaga from './initialInformation/saga';

export default function* rootSaga(){
    yield all([
        AboutMeSaga(),
        KnowledgeSaga(),
        ResumeSaga(),
        PortfolioSaga(),
        InitialInformationSaga()
    ]);
}