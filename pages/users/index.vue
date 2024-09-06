<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input
        type="name"
        placeholder="Name"
        aria-label="Name"
        v-model="form.name" />
      <input
        type="email"
        placeholder="Email"
        aria-label="Email"
        autocomplete="email"
        v-model="form.email" />
      <input type="submit" value="Add User" />
    </form>
  </div>
</template>

<script setup>
  const form = reactive({
    name: '',
    email: '',
  });

  const handleSubmit = async () => {
    const data = await useFetch('/api/users', {
      method: 'post',
      body: { id: crypto.randomUUID(), ...form },
    });
  };
</script>

<style scoped></style>
