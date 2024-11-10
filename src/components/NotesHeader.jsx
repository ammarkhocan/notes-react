import React from "react";

function NotesHeader({ keyword, onSearchItem }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="search"
          placeholder="Cari Catatan..."
          value={keyword}
          onChange={onSearchItem}
        />
      </div>
    </div>
  );
}

export default NotesHeader;
