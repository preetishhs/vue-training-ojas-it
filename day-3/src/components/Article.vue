<template>
  <div class="article">
    <img src="" />
    <h3>{{ articles.title }}</h3>
    <p>{{ articles.description }}</p>
    <button @click="changeName">Change Title</button>
    <SubArticle :id="articles.id" />
  </div>
</template>
<script>
import SubArticle from '@/components/SubArticle.vue'

export default {
  components: {
    SubArticle,
  },
  props: {
    articles: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      title: 'article title',
      description: 'description',
    }
  },
  methods: {
    changeName() {
      this.$emit('change-name', {
        title: 'New article title',
        id: this.articles.id,
      })
    },
  },
}
</script>
<style lang="scss">
.article {
  width: 150px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
}
</style>
