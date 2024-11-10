import React from "react";
import CreateNote from "./CreateNote";
import NoteListContainer from "./NoteListContainer";

function NotesBody({
  onAddItem,
  onDeleteItem,
  onArchived,
  activeNotes,
  archivedNotes,
}) {
  return (
    <div className="note-app__body">
      <CreateNote onAddItem={onAddItem} />
      <h2>Catatan Aktif</h2>
      {activeNotes.length !== 0 ? (
        <NoteListContainer
          notes={activeNotes}
          onDeleteItem={onDeleteItem}
          onArchived={onArchived}
        />
      ) : (
        <p className="notes-list__empty-message">Belum ada catatan</p>
      )}
      <h2>Arsip</h2>
      {archivedNotes.length !== 0 ? (
        <NoteListContainer
          notes={archivedNotes}
          onDeleteItem={onDeleteItem}
          onArchived={onArchived}
        />
      ) : (
        <p className="notes-list__empty-message">Belum ada catatan</p>
      )}
    </div>
  );
}

export default NotesBody;
