<template>
  <div class="header-view">
    <h3>My Blog</h3>
    <div class="nav-container">
      <Navigation />
      <div class="auth-buttons">
        <router-link tag="button" :to="{ name: 'login' }" v-if="!isLoggedIn">
          Login
        </router-link>
        <div v-else>
          <p>
            {{
              $t('goodMorningToast', {
                username: this.$store.state.auth.auth.email,
              })
            }}
            <button @click="logout">Logout</button>
          </p>
        </div>

        <LangSwitcher />
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import LangSwitcher from '@/components/LangSwitcher.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    Navigation,
    LangSwitcher,
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
  created() {
    console.log(this.$store)
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logoutUser')
      alert('Successfully Logged out')
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
