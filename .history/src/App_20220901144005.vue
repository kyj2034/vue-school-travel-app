<template>
  <TheNavigation/>
  <div class="container">
      <router-view v-slot="{Component}">
        <transition>
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
  </div>
</template>

<script>
import TheNavigationVue from "@/components/TheNavigation.vue";
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigationVue, TheNavigation }
}
</script>
