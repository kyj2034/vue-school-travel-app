<template>
  <TheNavigation/>
  <div class="container">
    <transition>
      
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigationVue from "@/components/TheNavigation.vue";
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigationVue, TheNavigation }
}
</script>
