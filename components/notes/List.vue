<template>
  <div class="notes-container">
    <NotesModal v-model="open" :note />
    <NotesCard
      v-for="note in props.notes"
      :key="note.id"
      :note
      @note-expansion="openModal" />
  </div>
</template>

<script setup>
  const notes = useNotes();
  const props = defineProps({
    notes: Array,
  });

  const open = ref(false);
  const note = ref();
  const openModal = (noteId) => {
    note.value = notes.value.find((n) => n.id === noteId);
    open.value = true;
  };
</script>

<style scoped>
  .notes-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
</style>
