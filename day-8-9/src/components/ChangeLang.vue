<template>
  <select v-model="$i18n.locale">
    <option v-for="lang in langs" :key="lang" :value="lang">
      {{ lang.toUpperCase() }}
    </option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      langs: ['en', 'fr'],
    }
  },
}
</script>
