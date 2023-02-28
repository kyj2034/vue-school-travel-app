<template>
  <a :href="to"><slot/></a>
  <router-link v-bind="$props"><slot/></router-link>
</template>

<script>
  import {RouterLink} from 'vue-router'
  export default {
    props:{
      ...RouterLink.props
    },
    computed:{
      isExternal(){
        return typeof this.to === 'string'
      }
    }
  }
</script>
