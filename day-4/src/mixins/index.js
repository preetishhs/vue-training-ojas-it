import { getUsersData } from '@/services/users'
const usersListMixin = {
  data() {
    return {
      usersList: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getUsersData().then((data) => {
        this.usersList = data
      })
    },
  },
}

export { usersListMixin }
