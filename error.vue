<template>
  <ul>
    <li><NuxtLink to="/working">Working link</NuxtLink></li>
    <li><NuxtLink to="/404notfound">Not found</NuxtLink></li>
  </ul>
  <div>Error page</div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});
</script>
