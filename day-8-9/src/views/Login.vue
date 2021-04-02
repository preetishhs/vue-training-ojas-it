<template>
  <div class="login">
    <h3>Login</h3>
    Email: <input v-model="email" class="email" /> <br /><br />
    Password: <input v-model="password" class="password" /> <br /><br />
    <button @click="submit" class="login-button">Log In</button>
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
        const res = this.$store.dispatch('auth/loginUser', {
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
  max-width: 400px;
}
</style>
