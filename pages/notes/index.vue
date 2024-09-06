<template>
  <div>
    <h1>This is the notes page!</h1>

    <NuxtLink to="/notes/add">Add Note</NuxtLink>
    <NotesList :notes="payload" />
  </div>
</template>

<script setup>
  const payload = ref(null);

  try {
    const { data } = await useFetch('/api/notes', { method: 'get' });
    payload.value = data.value.notes;

    console.log(payload);
  } catch (error) {
    alert(error);
  }
</script>

<style scoped></style>
