<template>
  <div class="users-list">
    <Users
      v-for="user in usersList"
      :key="user.id"
      :userData="user"
      @click.native="openUserDetail(user.id)"
      @edit="editUser"
    />
    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h2>User Detail</h2>
      </template>
      <template v-slot:mainContent>
        Name: {{ selectedUser.name }} <br />
        Address: <br />
        {{ selectedUser.address.street }} <br />
        {{ selectedUser.address.suite }} <br />
        {{ selectedUser.address.city }} <br />
        {{ selectedUser.address.zipcode }} <br />
      </template>
    </modal>

    <modal v-if="editModal" @close="editModal = false">
      <template v-slot:header> Update User </template>
      <template v-slot:mainContent>
        Name: <input v-model="selectedUserForEdit.name" />
        <br />
        <button @click="saveUser">Save</button>
      </template>
    </modal>
  </div>
</template>
<script>
import { getUserDetail, updateUserDetail } from '@/services/users'
import Users from '@/components/Users.vue'
import Modal from '@/components/Modal.vue'
import { usersListMixin } from '@/mixins'
export default {
  name: 'UsersList',
  components: {
    Users,
    Modal,
  },
  mixins: [usersListMixin],
  data() {
    return {
      showModal: false,
      editModal: false,
      selectedUser: {},
      selectedUserForEdit: {},
    }
  },
  methods: {
    userType(id) {
      console.log('user id', id)
      if (id === 1) {
        return 'Admin'
      }
      return 'Customer'
    },
    openUserDetail(id) {
      this.$router.push({
        name: 'usersDetail',
        params: { userId: id },
        query: { usertype: this.userType(id), subscription: 'false' },
      })
    },
    showUserDetail(id) {
      getUserDetail(id).then((data) => {
        this.selectedUser = data
      })
      this.showModal = true
    },
    editUser(id) {
      getUserDetail(id).then((data) => {
        this.selectedUserForEdit = data
      })
      this.editModal = true
    },
    saveUser() {
      updateUserDetail(this.selectedUserForEdit).then((data) => {
        console.log(data)
        const userListTemp = this.usersList.map((item) => {
          if (item.id === data.user.id) {
            return data.user
          } else {
            return item
          }
        })
        this.usersList = userListTemp
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.users-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
