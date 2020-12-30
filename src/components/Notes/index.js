import React, { useState } from "react";
import "./index.scss";

const Note = ({ note, deleteNote }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{note.title}</h5>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={deleteNote}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <p className="note-body">{note.body}</p>
      </div>
    </div>
  );
};

const Notes = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  const handleAddNote = () => {
    if (title === "") {
      setError("Please fill note title");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setNotes([...notes, { title: title, body: body }]);
      setTitle("");
      setBody("");
    }
  };
  const deleteNote = (index) => {
    setNotes([...notes.filter((_, i) => i !== index)]);
  };
  return (
    <section className="notes-container">
      <h3>G Notes</h3>

      <div className="row border">
        <div className="col-3 p-3 border-right">
          {notes.map((note, index) => (
            <Note
              note={note}
              key={index}
              deleteNote={() => deleteNote(index)}
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
              <button
                className="btn btn-primary ml-auto"
                onClick={handleAddNote}
              >
                Save
              </button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Notes;
