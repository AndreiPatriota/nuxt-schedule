<template>
  <div class="notes-container">
    <NotesCard v-for="note in props.notes" :key="note.id" :note />
  </div>
</template>

<script setup>
  const props = defineProps({
    notes: Array,
  });
</script>

<style scoped>
  .notes-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
</style>
