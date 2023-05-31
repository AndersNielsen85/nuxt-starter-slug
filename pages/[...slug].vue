<template>
  <div>Catch all route "{{ path }}"</div>
  <pre>{{ data }}</pre>
</template>
<script lang="ts" setup>
const route = useRoute();

const path = route.fullPath;
const { data } = await useFetch(() => `/api${path}`, {
  onResponseError({ response }) {
    console.log('error in request');
  },
});

if (!data.value) {
  throw createError('No data');
}
</script>
