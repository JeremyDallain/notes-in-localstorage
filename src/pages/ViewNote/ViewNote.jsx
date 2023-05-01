import ReactMarkdown from "react-markdown";
import { useNavigate, useOutletContext } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Tag } from "../../components/Tag/Tag";
import { useNoteContext } from "../../contexts/NoteContext";
import { useTagContext } from "../../contexts/TagContext";
import { getNoteWithTags } from "../../utils/tagUtils";

function ViewNote() {
  const note = useOutletContext();
  const { deleteNote } = useNoteContext();
  const { tags } = useTagContext();
  const navigate = useNavigate();

  const noteWithTags = note ? getNoteWithTags(note, tags) : null;

  function handleDelete() {
    deleteNote(note.id);
    navigate("/");
  }

  function handleEdit() {
    navigate(`/${note.id}/update`);
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between mb-6">
        <h1 className="text-3xl font-semibold">{noteWithTags.title}</h1>
        <div className="flex gap-2 flex-wrap mt-3 sm:mt-0">
          {noteWithTags.tags.map((tag) => (
            <Tag key={tag.id} label={tag.label} />
          ))}
        </div>
      </div>
      <ReactMarkdown className="markdown">
        {noteWithTags.markdown}
      </ReactMarkdown>
      <div className="mt-4">
        <Button onClick={handleEdit} bgColor="bg-blue-500" className="mr-4">
          Modifier
        </Button>
        <Button onClick={handleDelete} bgColor="bg-red-500">
          Supprimer
        </Button>
      </div>
    </>
  );
}

export default ViewNote;
