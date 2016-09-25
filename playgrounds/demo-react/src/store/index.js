import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducers from '../reducers';
import createLogger from 'redux-logger';

let storeCreator = createStore;

if (process.NODE_ENV !== 'production') {
  storeCreator = applyMiddleware(createLogger({collapsed: true}))(createStore);
}

const rootReducer = combineReducers(reducers);
const store = storeCreator(rootReducer);

export default store;
