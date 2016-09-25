import {combineReducers} from 'redux';
import ui from './ui';

const reducers = {
  appState: combineReducers({
    ui,
  }),
};

export default reducers;
