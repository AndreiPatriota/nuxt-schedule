<template>
  <div>
    <NotesCard v-for="note in props.notes" :key="note.id" :note />
  </div>
</template>

<script setup>
  const props = defineProps(['notes']);
</script>

<style scoped></style>
