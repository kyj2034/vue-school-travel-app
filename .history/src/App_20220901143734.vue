<template>
  <TheNavigation/>
  <div class="container">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TheNavigationVue from "@/components/TheNavigation.vue";
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigationVue, TheNavigation }
}
</script>
