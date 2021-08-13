import sagas from './sagas';
import reducers from './reducers';

import createSagaMiddleware from 'redux-saga';
import { compose, createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares)
        ),
    );
    sagaMiddleware.run(sagas);
    return store;
}