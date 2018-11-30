<template lang="pug">
  v-layout(column)
    v-flex(xs6 offset-xs3)
      .white.elevation-2
        v-toolbar(flat dense dark).cyan
          v-toolbar-title Profile
        .container.pl-4.pr-4.pt-2.pb-2

        br
        .error(v-html="error")
        .success(v-html="success")
        br


</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
