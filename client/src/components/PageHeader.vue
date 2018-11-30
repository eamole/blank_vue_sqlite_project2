<template lang="pug">
    v-toolbar(fixed dark).cyan
      v-toolbar-title
        span(@click="routeTo ('/')").clickable App Name
      v-toolbar-items
        <!--v-btn(flat dark) Browse-->
      v-spacer
      v-toolbar-items
        v-btn(flat dark @click="routeTo ('profile')") Profile
        v-btn(flat dark @click="logout") Logout
        v-btn(flat dark @click="routeTo ('login')") Login
        v-btn(flat dark @click="routeTo ('register')") Sign Up
        <!--span(v-if="isLoggedIn") {{user.email}}-->
        <!--span {{isLoggedIn}}-->
        <!--span {{this.$someStrangeName}}-->

</template>

<script>
export default {
  name: 'PageHeader',
  methods: {
    routeTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.user = null
      this.isLoggedIn = false
      this.routeTo('home')
    }
  }

}
</script>

<style scoped>
.clickable {
  cursor: pointer
}
.clickable:hover {
  color: black;
}
</style>
