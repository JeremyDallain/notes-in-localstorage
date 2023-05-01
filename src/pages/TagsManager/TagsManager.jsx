import { useRef } from "react";
import Button from "../../components/Button/Button";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTagContext } from "../../contexts/TagContext";

function TagsManager() {
  const { tags, createTag, updateTag, deleteTag } = useTagContext();
  const createTagRef = useRef(null);

  function handleUpdateTag(tagId, updatedLabel) {
    updateTag({ id: tagId, label: updatedLabel });
  }

  function handleCreateTag(e) {
    e.preventDefault();
    const newTagLabel = createTagRef.current.value;
    if (!newTagLabel) {
      return;
    }
    createTag({ label: newTagLabel });
    createTagRef.current.value = "";
    createTagRef.current.focus();
  }

  return (
    <>
      <PageTitle>Gestion des tags</PageTitle>
      <div>
        <ul>
          {tags.map((tag) => (
            <li key={tag.id} className="flex mb-2">
              <input
                type="text"
                value={tag.label}
                onChange={(e) => handleUpdateTag(tag.id, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <Button
                className="ml-2"
                bgColor="bg-red-500"
                type="button"
                onClick={() => deleteTag(tag.id)}
              >
                X
              </Button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreateTag} className="flex mt-5">
          <input
            type="text"
            ref={createTagRef}
            placeholder="New Tag"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <Button bgColor="bg-blue-500" className="ml-2">
            +
          </Button>
        </form>
      </div>
    </>
  );
}

export default TagsManager;
