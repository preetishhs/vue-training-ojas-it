<template>
  <div class="cards">
    <Article
      v-show="show"
      v-for="article in articles"
      :key="article.id"
      :articles="article"
      @change-name="updateName"
    />
  </div>
</template>
<script>
import Article from '@/views/Article.vue'
export default {
  components: {
    Article,
  },
  data() {
    return {
      show: true,
      articles: [
        {
          id: 1,
          title: 'title 1',
          description: 'description 1',
        },
        {
          id: 2,
          title: 'title 2',
          description: 'description 2',
        },
        {
          id: 3,
          title: 'title 3',
          description: 'description 3',
        },
      ],
    }
  },
  methods: {
    updateName(data) {
      console.log(data)
      this.articles.forEach((item) => {
        if (item.id === data.id) {
          item.title = data.title
        }
      })
    },
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
