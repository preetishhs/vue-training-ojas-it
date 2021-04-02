<template>
  <div class="user">
    <br />Name: {{ userData.name }} <br />Username: {{ userData.username }}
    <br />Email:
    {{ userData.email }}
    <button @click.stop="editUser(userData.id)">Edit</button>
  </div>
</template>
<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editUser(id) {
      this.$emit('edit', id)
    },
  },
}
</script>
<style lang="scss" scoped>
.user {
  padding: 10px;
  width: 180px;
  border: 2px solid black;
  margin: 20px;
  border-radius: 5px;
}
</style>
