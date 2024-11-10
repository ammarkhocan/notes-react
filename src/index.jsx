import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import NotesContainer from "./components/NotesContainer";

const root = createRoot(document.getElementById("root"));
root.render(<NotesContainer />);
