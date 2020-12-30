import { ADD_NOTES, EDIT_NOTE, DELETE_NOTE } from "./Types";

export const addNote = (note) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: ADD_NOTES,
      payload: { note },
    });
    resolve();
  });
};

export const editNote = (note, index) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: EDIT_NOTE,
      payload: { note, index },
    });
    resolve();
  });
};

export const deleteNote = (index) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: DELETE_NOTE,
      payload: { index },
    });
    resolve();
  });
};
