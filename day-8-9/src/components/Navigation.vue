<template>
  <div class="navigation">
    <router-link :to="{ name: 'home' }"> {{ $t('nav.home') }} </router-link> |
    <router-link :to="{ name: 'usersList' }">
      {{ $t('nav.usersList') }}
    </router-link>
    |
    <router-link :to="{ name: 'ArticleList' }">
      {{ $t('nav.articleList') }}
    </router-link>
    |
    <router-link :to="{ name: 'settings' }">
      {{ $t('nav.settings') }}
    </router-link>
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
