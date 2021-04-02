<template>
  <div class="header-view">
    <h3>My Blog {{ $t('msg') }}</h3>
    <div class="nav-container">
      <Navigation />
      <div class="auth-buttons">
        <router-link
          tag="button"
          class="login-button"
          :to="{ name: 'login' }"
          v-if="!isLoggedIn"
        >
          Login
        </router-link>
        <div v-else>
          <p>{{ $t('welcome', { username: 'phs' }) }}</p>
          <button @click="logout" class="logout-button">Logout</button>
        </div>
        <ChangeLang />
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import ChangeLang from '@/components/ChangeLang.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    Navigation,
    ChangeLang,
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logoutUser')
    },
  },
}
</script>
<style lang="scss" scoped>
.header-view {
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
