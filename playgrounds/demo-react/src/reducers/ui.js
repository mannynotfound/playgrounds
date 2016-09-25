import {actions} from '../actions';

const {LOADED} = actions;

export default (state = {}, action) => {
  const newState = {...state};

  switch (action.type) {
    case LOADED:
      newState.loaded = true;
      return newState;
    default:
      return state;
  }
};
