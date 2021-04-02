<template>
  <div class="app">
    <HeaderView />
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderView from '@/components/HeaderView.vue'
export default {
  components: {
    HeaderView,
  },
}
</script>
<style lang="scss" scoped></style>
