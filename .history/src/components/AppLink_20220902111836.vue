<template>
  <a href=""></a>
  <router-link v-bind="$props"><slot/></router-link>
</template>

<script>
  import {RouterLink} from 'vue-router'
  export default {
    props:{
      ...RouterLink.props
    }
  }
</script>
