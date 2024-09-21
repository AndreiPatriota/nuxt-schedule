<template>
  <div>
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
        <input type="submit" value="Add Note" />
        <input type="reset" value="Reset" />
      </div>
    </form>

    <button><NuxtLink to="/notes">Go back</NuxtLink></button>
  </div>
</template>

<script setup>
  const form = reactive({
    title: '',
    description: '',
    color: '',
  });

  const router = useRouter();
  const submitForm = async () => {
    try {
      const data = await $fetch('/api/notes', {
        method: 'post',
        body: { id: crypto.randomUUID(), ...form },
      });

      await router.push('/notes');
    } catch (error) {
      alert(error);
    }
  };
</script>

<style scoped></style>
