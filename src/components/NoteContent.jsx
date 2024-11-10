import React from "react";
import { showFormattedDate } from "../utils";

function NoteContent({ notes }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{notes.title}</h3>
      <p className="note-item__date">{showFormattedDate(notes.createdAt)}</p>
      <p className="note-item__body">{notes.body}</p>
    </div>
  );
}

export default NoteContent;
