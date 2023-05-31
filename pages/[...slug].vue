<template>
  <main>
    <div>Catch all route "{{ path }}"</div>
    <pre>{{ data }}</pre>
  </main>
</template>
<script lang="ts" setup>
const route = useRoute();

const path = route.fullPath;
const { data } = await useFetch(() => `/api${path}`);

//if (!data.value) {
  //showError('No data');
  //throw createError('No data');
//}
</script>
