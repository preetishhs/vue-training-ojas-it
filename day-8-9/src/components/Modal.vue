<template>
  <div class="container">
    <div class="modal">
      <div class="close" @click="close">X</div>
      <h3>
        <slot
          name="header"
          :websiteName="website"
          :countryName="country"
        ></slot>
      </h3>
      <slot name="mainContent"></slot>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
      <button @click="openLogin" class="open-login">Open Login</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      website: 'Amazon',
      country: 'India',
    }
  },
  methods: {
    close() {
      this.$emit('close', true)
    },
    openLogin() {
      this.$router.push({ name: 'login' })
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 300px;
  height: 400px;
  background: white;
  border: 2px solid black;
  border-radius: 4px;
  padding: 10px;
}
.close {
  text-align: right;
  padding: 5px;
  cursor: pointer;
}
.footer {
  margin-top: 20px;
  border-top: 2px solid black;
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
