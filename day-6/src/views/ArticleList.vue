<template>
  <div class="cards">
    <Article
      v-show="show"
      v-for="article in getArticleFiltered"
      :key="article.id"
      :articles="article"
    />
  </div>
</template>
<script>
import Article from '@/views/Article.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Article,
  },
  data() {
    return {
      show: true,
    }
  },
  computed: {
    ...mapState('articles', ['articleList']),
    ...mapGetters('articles', ['getArticleFiltered']),
    ...mapGetters('auth', ['isLoggedIn']),
  },
  created() {
    this.getArticleList()
  },
  beforeRouteEnter(to, from, next) {
    console.log(this)
    if (this.isLoggedIn) {
      next()
    } else {
      next({ name: 'login' })
    }
  },
  methods: {
    ...mapActions('articles', ['getArticleList']),
  },
}
</script>
<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
</style>
