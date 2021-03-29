<template>
  <div class="header-view">
    <h3>My Blog</h3>
    <Navigation />
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation,
  },
}
</script>
<style lang="scss" scoped>
.header-view {
  width: 100%;
  background: lightblue;
  text-align: center;
  padding: 30px;
  margin-bottom: 30px;
}
</style>
