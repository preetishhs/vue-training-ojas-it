<template>
  <div>
    {{ msg }}
    <br />
    <div class="cards">
      <Article
        v-for="article in articles"
        :key="article.id"
        :articles="article"
        @change-name="updateName"
      />
    </div>
    <LifeCycle v-if="show" />
    <button @click="show = false">remove component</button>
  </div>
</template>
<script>
import Article from '@/components/Article.vue'
import eventbus from '@/eventbus'
import LifeCycle from '@/components/LifeCycle.vue'
export default {
  components: {
    Article,
    LifeCycle,
  },
  data() {
    return {
      msg: 'Hello world',
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
  created() {
    eventbus.$on('pass-message', (data) => {
      this.updateName(data)
    })
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
<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
