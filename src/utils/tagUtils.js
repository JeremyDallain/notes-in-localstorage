export function getTagsByIds(tagList, tagIds) {
  return tagIds
    .map((tagId) => {
      const tag = tagList.find((t) => t.id === tagId);
      return tag ? tag : null;
    })
    .filter((tag) => tag !== null);
}

export function getNoteWithTags(note, tagList) {
  const tags = getTagsByIds(tagList, note.tagIds);
  return { ...note, tags };
}

export function getNotesWithTags(notes, tagList) {
  return notes.map((note) => getNoteWithTags(note, tagList));
}
