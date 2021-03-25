<template>
  <div class="app">
    <div v-if="false">
      {{ msg }}
      <button @click="modalVisible2 = true">Show Sign up</button>
      <button @click="show('ArticleList')">Article List</button>
      <button @click="show('ArticleDetail')">Article</button>
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
      <br />
      <br />
      <modal v-if="modalVisible" @close="modalVisible = false">
        <template v-slot:header="{ websiteName }">
          Login to {{ websiteName }}
        </template>
        <template v-slot:mainContent>
          UserName: <input /> Password: <input />
        </template>
        <template v-slot:footer>
          <button>Login</button>
        </template>
      </modal>

      <modal v-if="modalVisible2" @close="modalVisible2 = false">
        <template v-slot:header> Sign Up </template>
        <template v-slot:mainContent>
          Email: <input /> <br />
          Password: <input /> <br />
          Confirm Password: <input /><br />
        </template>
        <template v-slot:footer>
          <button>Sign Up</button>
        </template>
      </modal>
    </div>
    <div>
      <Signup />
    </div>
    <div v-if="false" class="event-modifiers" @click="alertInParent">
      <EventModifers />
    </div>
  </div>
</template>
<script>
import eventbus from '@/eventbus'
import ArticleList from '@/components/ArticleList.vue'
import ArticleDetail from '@/components/ArticleDetail.vue'
import Signup from '@/components/Signup.vue'
import Modal from '@/components/Modal.vue'
import EventModifers from '@/components/EventModifers.vue'
export default {
  components: {
    ArticleList,
    ArticleDetail,
    Modal,
    Signup,
    EventModifers,
  },
  data() {
    return {
      modalVisible: false,
      modalVisible2: false,
      selectedComponent: 'ArticleList',
      msg: 'Hello world',
    }
  },
  created() {
    eventbus.$on('pass-message', (data) => {
      this.updateName(data)
    })
  },
  methods: {
    show(componentName) {
      this.selectedComponent = componentName
    },
    alertInParent() {
      alert('Alert in Parent')
    },
  },
}
</script>
<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
}
</style>
