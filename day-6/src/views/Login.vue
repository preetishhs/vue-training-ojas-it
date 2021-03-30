<template>
  <div class="login">
    <h3>Login</h3>
    Email: <input v-model="email" /> <br />
    Password: <input v-model="password" /> <br />
    <button @click="submit">Log In</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      try {
        const res = await this.$store.dispatch('auth/loginUser', {
          email: this.email,
          password: this.password,
        })
        if (res) {
          this.$router.push({ name: 'home' })
        }
      } catch {
        console.log('failed')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  text-align: center;
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;
  margin: auto;
  margin-top: 20px;
}
</style>
