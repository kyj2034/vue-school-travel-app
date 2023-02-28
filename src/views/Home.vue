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
      // 라우터 에러 발생 시 실행되는 메소드
      triggerRouterError(){
        const navigationFailure = this.$router.push('/')
        if(isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)){
          // things went wrong
          console.log(navigationFailure.to)
          console.log(navigationFailure.from)
        }else{
          //all is well
        }
      }
    }
}
</script>
