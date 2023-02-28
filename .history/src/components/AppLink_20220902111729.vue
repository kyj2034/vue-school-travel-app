<template>
  <router-link v-bind="$props"></router-link>
</template>

<script>
  import {RouterLink} from 'vue-router'
  export default {
    props:{
      ...RouterLink.props
    }
  }
</script>
