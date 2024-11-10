import React, { useState } from "react";
import NotesHeader from "./NotesHeader";
import NotesBody from "./NotesBody";
import { getInitialData } from "../utils";

function NotesContainer() {
  const [notes, setNotes] = useState(getInitialData());
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );
  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  function handleAddItem(note) {
    setNotes([...notes, note]);
  }

  function handleDeleteItem(id) {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  }

  function handleSearchItem(e) {
    setSearch(e.target.value);
  }

  function handleArchivedItem(id) {
    const updateNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updateNotes);
  }

  return (
    <>
      <NotesHeader search={search} onSearchItem={handleSearchItem} />
      <NotesBody
        notes={notes}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
        onArchived={handleArchivedItem}
        activeNotes={activeNotes}
        archivedNotes={archivedNotes}
      />
    </>
  );
}

export default NotesContainer;
