import React from "react";
import NoteCard from "./NoteCard";

function NoteListContainer({ notes, onDeleteItem, onArchived }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard
          notes={note}
          key={note.id}
          onDeleteItem={onDeleteItem}
          onArchived={onArchived}
        />
      ))}
    </div>
  );
}

export default NoteListContainer;
