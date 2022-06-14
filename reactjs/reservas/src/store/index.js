import { createStore, applyMiddleware } from "redux";
import  createSagaMiddleware  from 'redux-saga'

import  rootSaga  from "./modules/rootSaga";
import rootReducer from "./modules/rootReducer";

const sagaMiddleware = createSagaMiddleware()

const enhance = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, enhance)

sagaMiddleware.run(rootSaga)

export default store