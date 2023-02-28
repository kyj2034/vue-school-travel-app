<template>
  <div class="home">
    <h1>All Destinations</h1>
    <button @click="triggerRouterError">Trigger Router Error</button>
    <div class="destinations">
      <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name : 'destination.show', params: {id: destination.id, slug: destination.slug}}"
      >
      <h2> {{ destination.name }}</h2>
      <img :src="`/images/${destination.image}`" alt="destination.name"/>
      </router-link>
    </div>
  </div> 
</template> 

<script>
import sourceData from '@/data.json'

export default {
  data: () => ({
      destinations : sourceData.destinations
    }),
    methods: {
      triggerRouterError(){
        const navigationFailure = this.$router.push('/')
        if(isNavigationFailure(navigationFailure, NavigationFailure)){
          // things went wrong
        }else{
          //all is well
        }
      }
    }
}
</script>
