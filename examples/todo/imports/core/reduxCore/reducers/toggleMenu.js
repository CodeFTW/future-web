import { TOGGLE_MENU } from '../actions/index';

const initialState = {
  open: false,
};

export const toggleMenu = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, open: action.open };
    default:
      return state;
  }
};
