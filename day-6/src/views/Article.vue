<template>
  <div
    class="article"
    :class="{ 'article-active': isActive, shadow: isActive }"
  >
    <h3 class="title" :class="classObj" :style="{ 'font-size': fontSize }">
      {{ articles.title }}
    </h3>
    <p>{{ articles.description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    articles: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      fontSize: '20px',
      isActive: false,
      showShadow: false,
      classObj: {
        active: false,
        size: false,
      },
      title: 'article title',
      description: 'description',
    }
  },
  methods: {
    // changeName() {
    //   this.$emit('change-name', {
    //     title: 'New article title',
    //     id: this.articles.id,
    //   })
    // },
    // updateLook() {
    //   this.isActive = true
    //   this.showShadow = true
    //   this.classObj.active = true
    //   this.fontSize = '40px'
    // },
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
  text-align: center;
}
.article-active {
  background-color: red;
}

.shadow {
  box-shadow: 10px 10px 10px rgb(141, 141, 141);
}
.title.active {
  color: orange;
}
.title.size {
  font-size: 20px;
}
</style>
