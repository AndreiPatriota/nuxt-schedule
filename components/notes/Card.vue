<template>
  <div>
    <article>
      <header>
        <p>
          <strong>{{ props.note.title }}</strong>
        </p>
        <span><font-awsome icon="circle" /></span>
      </header>
      {{ props.note.description }}
    </article>
  </div>
</template>

<script setup>
  const props = defineProps(['note']);
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
</style>
