import { ADD_NOTES, DELETE_NOTE, EDIT_NOTE } from "../actions/Types";

const initialState = {
  notes: [],
};

export default function Note(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTES:
      return {
        ...state,
        notes: [...state.notes, action.payload.note],
      };
    case EDIT_NOTE:
      state.notes.splice(action.payload.index, 1, action.payload.note);
      return {
        ...state,
        notes: [...state.notes],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((_, index) => index !== action.payload.index),
      };
    default:
      return state;
  }
}
