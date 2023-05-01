import { useRef, useState } from "react";
import CreatableReactSelect from "react-select/creatable";
import { useNoteContext } from "../../contexts/NoteContext";
import { useTagContext } from "../../contexts/TagContext";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";

function AddNote() {
  const { createNote } = useNoteContext();
  const { tags, createTag } = useTagContext();

  const navigate = useNavigate();

  const titleRef = useRef(null);
  const markdownRef = useRef(null);
  const [selectedTags, setSelectedTags] = useState([]);

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
    createNote({ title, markdown, tagIds });

    navigate("/");
  }

  return (
    <>
      <PageTitle>Ajouter une note</PageTitle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={titleRef}
          placeholder="Title"
          className="w-full p-2 mb-3 border border-gray-300 rounded"
        />
        <textarea
          ref={markdownRef}
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
        <Button bgColor="bg-blue-500" className="mt-3">
          Créer
        </Button>
      </form>
    </>
  );
}

export default AddNote;
