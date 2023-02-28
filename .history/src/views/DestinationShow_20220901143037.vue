<template>
  <section class="destination">
    <h1> {{destination.name}} </h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name"/>
      <p>{{destination.description}}</p>
    </div>
  </section>
  <section class="experiences">
    <h2> Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params:{experienceSlug : experience.slug}}">
        <ExperienceCard
          :experience="experience"
        />
      </router-link>
    </div>
    <router-view/>
  </section>
</template>

<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/ExperienceCard.vue'
  export default {
    components:{ ExperienceCard },
    props: {
      id: {type: Number, required: true}
    },
    computed:{
      destination() {
        return sourceData.destinations.find(
          (destination) => destination.id == this.id
        );
      },  
    },

    // HTTP 통신으로 데이터 가져오기
    // methods: {
    //   async initData(){
    //     const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
    //     this.destination = await response.json()
    //   },
    // },
    // async created() {
    //   this.initData()
    //   this.$watch(
    //     () => this.$route.params,
    //     async () => {
    //       this.initData()
    //     }
    //   )
    // }
  }
</script>
