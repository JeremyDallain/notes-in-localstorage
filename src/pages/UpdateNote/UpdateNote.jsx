import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router";
import { useNoteContext } from "../../contexts/NoteContext";
import { useTagContext } from "../../contexts/TagContext";
import CreatableReactSelect from "react-select/creatable";
import { getNoteWithTags } from "../../utils/tagUtils";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";

function UpdateNote() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const markdownRef = useRef(null);

  const note = useOutletContext();
  const { updateNote, deleteNote } = useNoteContext();
  const { tags, createTag } = useTagContext();

  const noteWithTags = getNoteWithTags(note, tags);
  const [selectedTags, setSelectedTags] = useState(
    noteWithTags.tags.map((tag) => ({ value: tag.id, label: tag.label }))
  );

  const tagOptions = tags.map((tag) => ({ value: tag.id, label: tag.label }));

  function onCreateOption(newTagLabel) {
    const newTag = createTag({ label: newTagLabel });
    setSelectedTags([
      ...selectedTags,
      { value: newTag.id, label: newTag.label },
    ]);
  }

  function onChange(selectedOptions) {
    setSelectedTags(selectedOptions);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = titleRef.current.value;
    const markdown = markdownRef.current.value;
    const tagIds = selectedTags.map((tag) => tag.value);

    updateNote({ id: note.id, title, markdown, tagIds });
    navigate("/");
  }

  function handleDelete() {
    deleteNote(note.id);
    navigate("/");
  }

  return (
    <>
      <PageTitle>Modifier une note</PageTitle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={titleRef}
          defaultValue={noteWithTags.title}
          placeholder="Title"
          className="w-full p-2 mb-3 border border-gray-300 rounded"
        />
        <textarea
          ref={markdownRef}
          defaultValue={noteWithTags.markdown}
          placeholder="Markdown content"
          className="w-full p-2 mb-3 border border-gray-300 rounded"
          rows="10"
        />
        <CreatableReactSelect
          onCreateOption={onCreateOption}
          value={selectedTags}
          options={tagOptions}
          onChange={onChange}
          isMulti
        />
        <div className="mt-3">
          <Button className="mr-4">Modifier</Button>
          <Button onClick={handleDelete} type="button" bgColor="bg-red-500">
            Supprimer
          </Button>
        </div>
      </form>
    </>
  );
}

export default UpdateNote;
