<template>
  <div class="header-view">
    <h3>My Blog</h3>
    <div class="nav-container">
      <Navigation />
      <router-link tag="button" :to="{ name: 'login' }" v-if="!isLoggedIn">
        Login
      </router-link>
      <div v-else>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    Navigation,
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
  created() {
    console.log(this.$store)
  },
  methods: {
    logout() {
      this.$store.dispatch('logoutUser')
    },
  },
}
</script>
<style lang="scss" scoped>
.header-view {
  width: 100%;
  background: lightblue;
  text-align: center;
  padding: 30px;
  margin-bottom: 30px;
}
.nav-container {
  display: flex;
  justify-content: space-around;
}
</style>
