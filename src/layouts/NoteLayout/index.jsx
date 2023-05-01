import { useParams } from "react-router-dom";
import { Outlet } from "react-router";
import { useNoteContext } from "../../contexts/NoteContext";

function NoteLayout() {
  const { id } = useParams();
  const { getNoteById } = useNoteContext();
  const note = getNoteById(id);

  if (!note) {
    return <p>Note not found.</p>;
  }

  return <Outlet context={note} />;
}

export default NoteLayout;
