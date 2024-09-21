<template>
  <div>
    <h1>This is the notes page!</h1>

    <NuxtLink to="/notes/add">Add Note</NuxtLink>
    <NotesList :notes />
  </div>
</template>

<script setup>
  const notes = useNotes();

  // init notes
  const { data } = await useFetch('/api/notes');
  notes.value = data.value.notes;

  // update note handler
  const router = useRouter();
  const updateNote = (noteId) => {
    router.push(`/notes/${noteId}`);
  };
  provide('update-note', updateNote);

  // delete note handler
  const deleteNote = async (noteId) => {
    await $fetch(`/api/notes/${noteId}`, { method: 'DELETE' });

    notes.value = notes.value.filter((n) => n.id !== noteId);
  };
  provide('delete-note', deleteNote);
</script>

<style scoped></style>
