<template>
  <div>
    <h3 v-if="isUpdate">Update Note</h3>
    <h3 v-else>Create Note</h3>
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
        <input type="submit" :value="isUpdate ? 'Update' : 'Create'" />
        <input type="reset" value="Reset" />
      </div>
    </form>

    <NuxtLink to="/notes">Go back</NuxtLink>
  </div>
</template>

<script setup>
  const route = useRoute();
  const router = useRouter();
  const noteId = route.params.id;
  const isUpdate = ref(false);
  const notes = useNotes();
  const form = reactive({
    title: '',
    description: '',
    color: '',
  });
  
  let note;
  if (noteId) {
    isUpdate.value = true;

    note = notes.value.find((n) => n.id === noteId);
    form.title = note.title;
    form.description = note.description;
    form.color = note.color;
  }

  const submitForm = async () => {
    const method = isUpdate.value ? 'PUT' : 'POST';
    const path = isUpdate.value ? `/api/notes/${noteId}` : '/api/notes';
    const body = isUpdate.value
      ? { id: note.id, ...form }
      : { id: crypto.randomUUID(), ...form };

    await $fetch(path, { method, body });

    router.push('/notes');
  };
</script>

<style lang="scss" scoped></style>
