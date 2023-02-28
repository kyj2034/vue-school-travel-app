<template>
  <div class="card">
    <img :src="`/images/${experiences.image}`" :alt="experience.name"/>
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>
