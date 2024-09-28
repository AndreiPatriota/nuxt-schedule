<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <strong><NuxtLink to="/">Drei's Shcedule</NuxtLink></strong>
        </li>
      </ul>
      <h1>Schedule</h1>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/notes">Notes</NuxtLink></li>
        <li><NuxtLink to="/tasks">Tasks</NuxtLink></li>
      </ul>
    </nav>

    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  .main-content {
    margin-top: 15px;
  }
</style>
