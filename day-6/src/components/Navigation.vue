<template>
  <div class="navigation">
    <router-link :to="{ name: 'home' }"> Home </router-link> |
    <router-link :to="{ name: 'usersList' }"> Users List </router-link> |
    <router-link :to="{ name: 'ArticleList' }"> Article List </router-link> |
    <router-link :to="{ name: 'settings' }"> Settings </router-link>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.navigation {
  text-align: center;
  padding: 10px;
  font-size: 18px;
}
</style>
