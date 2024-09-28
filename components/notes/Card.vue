<template>
  <div>
    <article>
      <header>
        <p>
          <strong>{{ props.note.title }}</strong>
        </p>
        <div class="icons-container">
          <span @click="updateNote(props.note.id)"
            ><MdiIcon icon="mdiNoteEdit"
          /></span>
          <span @click="deleteNote(props.note.id)"
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
  const router = useRouter();
  const notes = useNotes();

  // update note handler
  const updateNote = (noteId) => {
    router.push(`/notes/add-update/${noteId}`);
  };

  // delete note handler
  const deleteNote = async (noteId) => {
    if (window.confirm('Are you sure you want to dele the note?')) {
      await $fetch(`/api/notes/${noteId}`, { method: 'DELETE' });

      notes.value = notes.value.filter((n) => n.id !== noteId);
    }
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
