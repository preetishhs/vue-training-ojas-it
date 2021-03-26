<template>
  <div>
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
</template>
<script>
export default {
  data() {
    return {
      modalVisible: false,
      modalVisible2: false,
    }
  },
}
</script>
