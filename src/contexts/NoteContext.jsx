import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import * as noteService from "../services/noteService";

const NoteContext = createContext();

export function NoteProvider({ children }) {
  const [notes, setNotes] = useLocalStorage("notes", []);

  function createNote(newNote) {
    setNotes(noteService.createNote(notes, newNote));
  }

  function updateNote(updatedNote) {
    setNotes(noteService.updateNote(notes, updatedNote));
  }

  function deleteNote(noteId) {
    setNotes(noteService.deleteNote(notes, noteId));
  }

  function getNoteById(noteId) {
    return noteService.getNoteById(notes, noteId);
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        createNote,
        updateNote,
        deleteNote,
        getNoteById,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export function useNoteContext() {
  return useContext(NoteContext);
}
