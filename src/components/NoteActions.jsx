import React from "react";

function NoteActions({ notes, onDeleteItem, onArchived }) {
  return (
    <div className="note-item__action">
      <button
        className="note-item__delete-button"
        onClick={() => onDeleteItem(notes.id)}
      >
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchived(notes.id)}
      >
        {notes.archived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default NoteActions;
