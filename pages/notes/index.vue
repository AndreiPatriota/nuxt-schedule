<template>
  <div>
    <h2>This is the notes page!</h2>

    <NuxtLink to="/notes/add-update">Add Note</NuxtLink>
    <NotesList :notes />
  </div>
</template>

<script setup>
  const notes = useNotes();

  const { data } = await useFetch('/api/notes');
  notes.value = data.value.notes;
</script>

<style scoped></style>
