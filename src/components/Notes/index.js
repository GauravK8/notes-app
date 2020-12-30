import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { addNote, editNote, deleteNote } from "../../redux/actions/Notes";
import { logout } from "../../redux/actions/User";
import "./index.scss";

const Note = ({ note, deleteNote, editNote }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{note.title}</h5>
          <span>
            <span className="edit-icon mr-2" title="Edit" onClick={editNote}>
              &#9998;
            </span>
            <button
              type="button"
              className="close"
              aria-label="Close"
              title="Delete"
              onClick={deleteNote}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </span>
        </div>

        <p className="note-body">{note.body}</p>
      </div>
    </div>
  );
};

const Notes = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [noteId, setNoteId] = useState(-1);
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.Note.notes);
  const isAuthenticated = useSelector((state) => state.User?.isAuthenticated);

  useEffect(() => {
    setNotes(allNotes);
  }, [allNotes]);

  const handleAddNote = () => {
    if (title === "") {
      setError("Please fill note title");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      const note = { title: title, body: body };
      if (noteId > -1) {
        dispatch(editNote(note, noteId));
      } else {
        dispatch(addNote(note));
      }
      setTitle("");
      setBody("");
      setNoteId(-1);
    }
  };

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index));
    setTitle("");
    setBody("");
    setNoteId(-1);
  };

  const handleEditNote = (note, index) => {
    setTitle(note.title);
    setBody(note.body);
    setNoteId(index);
  };

  const handleCancelEditNote = () => {
    setTitle("");
    setBody("");
    setNoteId(-1);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <section className="notes-container">
      <div className="d-flex justify-content-between">
        <h3>G Notes</h3>
        <button className="btn btn-link" title="Logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="row border ml-0 mr-0">
        <div className="col-3 p-3 border-right">
          {notes.map((note, index) => (
            <Note
              note={note}
              key={index}
              deleteNote={() => handleDeleteNote(index)}
              editNote={() => handleEditNote(note, index)}
            />
          ))}
        </div>
        <div className="col-9 p-3">
          <div className="d-flex flex-column">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <label htmlFor="title">Title :</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="mb-2 form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="body">Body :</label>
            <textarea
              name="body"
              placeholder="Body"
              className="mb-2 form-control"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <footer className="d-flex justify-content-end">
              {noteId > 0 && (
                <button
                  className="btn btn-default ml-auto"
                  title="Cancel editing note !"
                  onClick={handleCancelEditNote}
                >
                  Cancel
                </button>
              )}
              <button
                className={`btn btn-primary ${
                  noteId > 0 ? "ml-2" : "ml-auto"
                } ${title === "" && "disabled"}`}
                title={title === "" ? "Title is mandatory" : "Save"}
                onClick={handleAddNote}
              >
                {noteId > 0 ? "Update" : "Save"}
              </button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Notes;
