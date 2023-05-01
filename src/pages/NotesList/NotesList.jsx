import { useEffect, useState } from "react";
import { getTagsByIds } from "../../utils/tagUtils";
import { useNoteContext } from "../../contexts/NoteContext";
import { useTagContext } from "../../contexts/TagContext";
import { initialNotes } from "../../data/initialNotes";
import { initialTags } from "../../data/initialTags";
import process from "process";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import PageTitle from "../../components/PageTitle/PageTitle";
import PlusButton from "./components/PlusButton";
import NoteCard from "./components/NoteCard";

const NotesList = () => {
  const { notes, setNotes } = useNoteContext();
  const { tags, setTags } = useTagContext();

  // filtering notes by title and tags
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState("");

  const tagOptions = tags.map((tag) => ({ value: tag.id, label: tag.label }));

  const filteredNotes = notes.filter((note) => {
    const noteTitleMatches = note.title
      .toLowerCase()
      .includes(title.toLowerCase());
    const noteTags = getTagsByIds(tags, note.tagIds);
    const noteTagsMatch = selectedTags.every((tag) =>
      noteTags.some((noteTag) => noteTag.id === tag.value)
    );
    return noteTitleMatches && noteTagsMatch;
  });

  // Initialize data if notes or tags are not in localStorage (dev only)
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (!localStorage.getItem("notes")) {
        setNotes(initialNotes);
      }
      if (!localStorage.getItem("tags")) {
        setTags(initialTags);
      }
    }
  }, []);

  return (
    <>
      <PageTitle>Mes Notes</PageTitle>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Filtrer par titre"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <ReactSelect
            value={selectedTags}
            options={tagOptions}
            onChange={setSelectedTags}
            isMulti
            placeholder="Filtrer par tag"
            className="w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map((note) => {
          const noteTags = getTagsByIds(tags, note.tagIds);
          return <NoteCard key={note.id} note={note} tags={noteTags} />;
        })}
        <Link
          to="/create"
          className="w-full p-4 flex items-center justify-center"
        >
          <PlusButton />
        </Link>
      </div>
    </>
  );
};

export default NotesList;


