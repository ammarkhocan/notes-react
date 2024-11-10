import React, { useState } from "react";

function CreateNote({ onAddItem }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputNote, setInputNote] = useState("");
  const charLimit = 50;

  function handleInputTitle(e) {
    setInputTitle(e.target.value.slice(0, charLimit));
  }

  function handleInputNote(e) {
    setInputNote(e.target.value);
  }

  function handleSubmitNote(e) {
    e.preventDefault();

    const newNote = {
      id: new Date().toISOString(),
      title: inputTitle,
      body: inputNote,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    onAddItem(newNote);

    setInputTitle("");
    setInputNote("");
  }

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={handleSubmitNote}>
        <p className="note-input__title__char-limit">
          {charLimit - inputTitle.length}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul..."
          required
          value={inputTitle}
          onChange={handleInputTitle}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu disini..."
          required
          value={inputNote}
          onChange={handleInputNote}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

export default CreateNote;
