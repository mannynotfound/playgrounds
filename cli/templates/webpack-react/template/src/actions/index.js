import keyMirror from 'keymirror';

export const actions = keyMirror({
  LOADED: null,
});

const {LOADED} = actions;

export const creators = {
  loaded() {
    return {
      type: LOADED,
    };
  },
};
