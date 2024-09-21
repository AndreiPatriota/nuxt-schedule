<template>
  <div>
    <h2>Message: {{ note.title }}</h2>
    <form @submit.prevent="submitForm">
      <label>Title: <input type="text" v-model="form.title" /></label>
      <label
        >Description: <textarea v-model="form.description"></textarea>
      </label>
      <select v-model="form.color" required>
        <option selected disabled value="">Select the flag color...</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="cyan">Cyan</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
      </select>

      <div class="grid">
        <input type="submit" value="Update Note" />
        <input type="reset" value="Reset" />
      </div>
    </form>

    <button><NuxtLink to="/notes">Go back</NuxtLink></button>
  </div>
</template>

<script setup>
  const route = useRoute();
  const router = useRouter();
  const notes = useNotes();
  const note = ref(null);
  const noteId = route.params.id;

  note.value = notes.value.find((n) => {
    return n.id === noteId;
  });

  const form = reactive({
    title: note.value.title,
    description: note.value.description,
    color: note.value.color,
  });

  const submitForm = async () => {
    await $fetch(`/api/notes/${noteId}`, {
      method: 'PUT',
      body: { id: noteId, ...form },
    });

    router.push('/notes');
  };
</script>

<style scoped></style>
