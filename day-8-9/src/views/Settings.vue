<template>
  <div class="settings">
    <div class="left-column">
      <router-link class="button" tag="div" :to="{ name: 'accountSettings' }"
        >Account Settings</router-link
      >
      <router-link class="button" tag="div" :to="{ name: 'privacySettings' }"
        >Privacy Settings</router-link
      >
      <router-link class="button" tag="div" :to="{ name: 'appSettings' }"
        >App Settings</router-link
      >
    </div>
    <div class="right-column">
      <h3>Settings</h3>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.settings {
  display: flex;
  .left-column {
    width: 300px;
    padding: 20px;
    .button {
      padding: 5px;
      border: 1px solid black;
      border-radius: 5px;
      margin: 5px;
      cursor: pointer;
    }
  }
  .right-column {
    width: 500px;
    margin-left: 20px;
    border: 2px solid red;
    border-radius: 5px;
    min-height: 400px;
    padding: 10px;
  }
}
</style>
