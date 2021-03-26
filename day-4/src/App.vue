<template>
  <div class="app">
    <div v-if="false">
      <button @click="show('ArticleList')">Article List</button>
      <button @click="show('ArticleDetail')">Article</button>
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
      <br />
    </div>
    <UsersList />
  </div>
</template>
<script>
import ArticleList from '@/components/ArticleList.vue'
import ArticleDetail from '@/components/ArticleDetail.vue'
import UsersList from '@/components/UsersList.vue'
export default {
  components: {
    ArticleList,
    ArticleDetail,
    UsersList,
  },
  data() {
    return {
      selectedComponent: 'ArticleList',
    }
  },
  methods: {
    show(componentName) {
      this.selectedComponent = componentName
    },
  },
}
</script>
<style lang="scss" scoped></style>
