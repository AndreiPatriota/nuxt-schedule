<template>
  <div>
    <dialog ref="dialog">
      <article>
        <header>
          <button aria-label="Close" rel="prev" @click="closeModal"></button>
          <h2>{{ props.note.title }}</h2>
        </header>
        <p>
          {{ props.note.description }}
        </p>
      </article>
    </dialog>
  </div>
</template>

<script setup>
  const dialog = ref(null);
  const model = defineModel({ type: Boolean, default: false });
  const props = defineProps({
    note: {
      type: Object,
      default(rawProps) {
        return { title: 'Title', description: 'description', color: 'color' };
      },
    },
  });

  watch(model, (newVal) => {
    if (newVal) {
      dialog.value.showModal();
    }
  });

  const closeModal = () => {
    dialog.value.close();

    model.value = false;
  };
</script>

<style scoped></style>
