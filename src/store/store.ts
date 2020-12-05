import { createStore, Store, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import rootReducer from './reducers';
import { initialState as initialAppState } from './reducers/app.reducer';
import { initialState as initialEventsState } from './reducers/events.reducer';

const configureStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const initialState = {
    app: initialAppState,
    events: initialEventsState,
  };

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore();
