<template>
  <div id="nav">
      <AppLink id="logo" to="/"> Vue School Travel App </AppLink>
      <!-- 각 목적지로 이동할 수 있는 메뉴를 생성. -->
      <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name : 'destination.show', params: {id: destination.id, slug: destination.slug}}"
      >
        {{ destination.name }}
      </AppLink>
      <AppLink :to="{name: 'protected'}"> Dashboard </AppLink>
      <AppLink to="http://vueschool.io">Vue School</AppLink>
  </div>
</template>

<script>
  // json 파일에서 데이터를 가져옴
  import sourceData from '@/data.json'

  export default {
    data(){
      return {
        destinations: sourceData.destinations
      }
    }
  }
</script>
