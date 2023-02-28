<template>
  <TheNavigation/>
  <div class="container">
      <router-view v-slot="{Component}">
        <transition name="moveUp" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation }
}
</script>

<style lang="css">
.moveUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% { opacity: 0;}
  50% { opacity: 0.5;}
  100% {opacity: 1;
}}
</style>
