<template>
  <section>
    <h1>{{experience.name}}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p> {{experience.description}}</p>
  </section>
</template>

<script>
  import sourceData from '@/data.json'
  export default {
    props:{
      id: {type: Number, required: true,},
      experienceSlug:{type: String, required: true,}
    },
    computed: {
      // 여행 목적지
      destination(){
        return sourceData.destinations.find(
          destination => destination.id === this.id
        )
      },
      // 여행 지역
      experience(){
        return this.destination.experiences.find(
          experience=> experience.slug === this.experienceSlug
        )
      }
    }
  }
</script>
