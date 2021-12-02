import { LOAD_CHARACTERS, LOAD_FAILED, initialState } from './types';

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case LOAD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default characterReducer;
