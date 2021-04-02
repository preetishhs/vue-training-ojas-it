<template>
  <div class="article-detail">
    <h1>My Article</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo
      consequuntur vitae molestiae illum incidunt facere, ut ducimus quia soluta
      saepe amet fugiat. Iure voluptates nisi, consequuntur fugiat cupiditate
      sequi.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
    }
  },
}
</script>
<style lang="scss" scoped>
.article-detail {
  margin: 20px;
  width: 300px;
  height: 300px;
  padding: 20px;
  border: 2px solid orange;
}
</style>
