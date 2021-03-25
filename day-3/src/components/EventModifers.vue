<template>
  <div class="box">
    <button @click.once.stop="alertMe">Alert Me!</button>
  </div>
</template>
<script>
export default {
  methods: {
    alertMe() {
      alert('Hello world')
    },
  },
}
</script>
<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  border: 2px solid black;
}
</style>
