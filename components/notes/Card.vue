<template>
  <div>
    <article>
      <header>
        <p>
          <strong>{{ props.note.title }}</strong>
        </p>
        <div class="icons-container">
          <span @click="$emit('note-edit')"
            ><MdiIcon icon="mdiNoteEdit"
          /></span>
          <span @click="deleteNoteHandler(props.note.id)"
            ><MdiIcon icon="mdiDelete"
          /></span>
        </div>
      </header>
      <div class="flag-container">
        <MdiIcon icon="mdiFlag" :style="`color: ${props.note.color}`" />
      </div>
      {{ props.note.description }}
    </article>
  </div>
</template>

<script setup>
  const props = defineProps(['note']);
  const deleteNote = inject('delete-note');

  const deleteNoteHandler = async (id) => {
    await deleteNote(id);
  };
</script>

<style scoped>
  article {
    width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .flag-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
  .icons-container > span {
    margin: 0px 5px;
  }
</style>
