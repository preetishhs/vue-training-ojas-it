<template>
  <div>
    <div>{{ msg }}</div>
    <button @click="msg = 'test'">change</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '',
    }
  },
  created() {
    this.msg = 'Life cycle'
    console.log('created')
  },
  mounted() {
    debugger
    // API calls
    this.appendText()
    console.log('mounted')
  },
  methods: {
    appendText() {
      this.msg += ' from mounted hook'
    },
  },
  // beforeUpdate() {
  //   console.log('beforeUpdate')
  // },
  // updated() {
  //   console.log('updated')
  // },
  // beforeDestroy() {
  //   console.log('beforeDestroy')
  // },
  // destroyed() {
  //   console.log('destroyed')
  // },
}
</script>
