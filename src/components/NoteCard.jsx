import React from "react";
import NoteContent from "./NoteContent";
import NoteActions from "./NoteActions";

function NoteCard({ notes, onDeleteItem, onArchived }) {
  return (
    <div className="note-item">
      <NoteContent notes={notes} />
      <NoteActions
        notes={notes}
        onDeleteItem={onDeleteItem}
        onArchived={onArchived}
      />
    </div>
  );
}

export default NoteCard;
