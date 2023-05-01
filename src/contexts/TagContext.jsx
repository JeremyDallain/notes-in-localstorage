import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import * as tagService from "../services/tagService";

const TagContext = createContext();

export function TagProvider({ children }) {
  const [tags, setTags] = useLocalStorage("tags", []);

  function createTag(newTag) {
    const updatedTags = tagService.createTag(tags, newTag);
    setTags(updatedTags);
    return updatedTags.find((tag) => tag.label === newTag.label);
  }

  function updateTag(updatedTag) {
    setTags(tagService.updateTag(tags, updatedTag));
  }

  function deleteTag(tagId) {
    setTags(tagService.deleteTag(tags, tagId));
  }

  function getTagById(tagId) {
    return tagService.getTagById(tags, tagId);
  }

  return (
    <TagContext.Provider
      value={{
        tags,
        setTags,
        createTag,
        updateTag,
        deleteTag,
        getTagById,
      }}
    >
      {children}
    </TagContext.Provider>
  );
}

export function useTagContext() {
  return useContext(TagContext);
}
