import { v4 as uuidv4 } from "uuid";

export function createTag(tags, newTag) {
  const newTagWithId = { ...newTag, id: uuidv4() };
  return [...tags, newTagWithId];
}

export function updateTag(tags, updatedTag) {
  return tags.map((tag) => (tag.id === updatedTag.id ? updatedTag : tag));
}

export function deleteTag(tags, tagIdToDelete) {
  return tags.filter((tag) => tag.id !== tagIdToDelete);
}

export function getTagById(tags, tagId) {
  return tags.find((tag) => tag.id === tagId);
}

export function removeTagFromNotes(notes, tagIdToRemove) {
  return notes.map((note) => {
    const updatedTagsId = note.tagsId.filter(
      (tagId) => tagId !== tagIdToRemove
    );
    return { ...note, tagsId: updatedTagsId };
  });
}
