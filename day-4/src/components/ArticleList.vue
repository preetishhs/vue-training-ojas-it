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
import Article from '@/components/Article.vue'
import axios from 'axios'
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
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          postId: 1,
        },
      })
      .then(function (response) {
        console.log(response)
      })

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error.response)
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
