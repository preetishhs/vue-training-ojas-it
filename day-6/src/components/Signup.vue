<template>
  <div class="form">
    Name: <input v-model="name" @keyup.ctrl.enter="alertMe" /> <br /><br />

    Password: <input v-model="password" type="password" /> <br /><br />

    Address: <textarea v-model="address"></textarea> <br /><br />

    Age: <input v-model="age" type="number" /> <br /><br />

    12+ years old:
    <input type="checkbox" v-model="ageCheck" />
    <br /><br />

    generes: <br />
    English: <input type="checkbox" v-model="generes" value="English" /> <br />
    Kannada: <input type="checkbox" v-model="generes" value="Kannada" /> <br />
    Telugu: <input type="checkbox" v-model="generes" value="Telugu" /> <br />
    <br />
    Agreement: Don't Agree:
    <input type="radio" v-model="agreement" :value="false" /> I Agree:
    <input input type="radio" v-model="agreement" :value="true" /><br />
    <select v-model="country" multiple>
      <option default disabled>Select one</option>
      <option value="in">India</option>
      <option value="us">USA</option>
      <option value="ge">germany</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      age: 0,
      address: '',
      password: '',
      generes: [],
      ageCheck: '',
      agreement: false,
      country: [],
    }
  },
  methods: {
    alertMe() {
      alert('enter key pressed')
    },
  },
}
</script>
<style lang="scss" scoped>
.form {
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
  width: 400px;
}
</style>
