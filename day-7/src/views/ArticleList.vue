<template>
  <div class="article-list">
    <h3>{{ $tc('article', getArticleFiltered.length) }}</h3>
    <div class="cards">
      <Article
        v-show="show"
        v-for="article in getArticleFiltered"
        :key="article.id"
        :articles="article"
      />
    </div>
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
  methods: {
    ...mapActions('articles', ['getArticleList']),
  },
}
</script>
<style lang="scss" scoped>
.article-list {
  text-align: center;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
</style>
