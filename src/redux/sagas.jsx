import { all } from 'redux-saga/effects';

import AboutMeSaga from './aboutMe/saga';

export default function* rootSaga(){
    yield all([
        AboutMeSaga()
    ]);
}