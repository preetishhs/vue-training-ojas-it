<template>
  <div class="user-detail">
    <h2>User detail: {{ userType }}</h2>
    Name: {{ userDetail.name }} <br />
    Email: {{ userDetail.email }} <br />
    phone: {{ userDetail.phone }} <br />
  </div>
</template>
<script>
import { getUserDetail } from '@/services/users'
export default {
  data() {
    return {
      id: '',
      userDetail: {},
      userType: '',
    }
  },
  created() {
    this.id = this.$route.params.userId
    this.userType = this.$route.query.usertype
    getUserDetail(this.id).then((data) => {
      this.userDetail = data
    })
  },
}
</script>
