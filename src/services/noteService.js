import { v4 as uuidv4 } from "uuid";

export function createNote(notes, newNote) {
  const newNoteWithId = { ...newNote, id: uuidv4() };
  return [...notes, newNoteWithId];
}

export function updateNote(notes, updatedNote) {
  return notes.map((note) => (note.id === updatedNote.id ? updatedNote : note));
}

export function deleteNote(notes, noteIdToDelete) {
  return notes.filter((note) => note.id !== noteIdToDelete);
}

export function getNoteById(notes, noteId) {
  return notes.find((note) => note.id === noteId);
}
