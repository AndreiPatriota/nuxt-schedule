<template>
  <div>
    <h1>This is the notes page!</h1>

    <NuxtLink to="/notes/add">Add Note</NuxtLink>
    <NotesList :notes />
  </div>
</template>

<script setup>
  const notes = ref(null);

  onMounted(async () => {
    const response = await $fetch('/api/notes');
    notes.value = response.notes;
  });

  const deleteNote = async (noteId) => {
    await $fetch(`/api/notes/${noteId}`, { method: 'DELETE' });

    notes.value = notes.value.filter((n) => n.id !== noteId);
  };

  provide('delete-note', deleteNote);
</script>

<style scoped></style>
