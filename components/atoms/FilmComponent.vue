<template>
  <NuxtLink :to="`/films/${Film.id}`" >
    <div>
      <h3>{{ Film.title }}</h3>
      <img :src="Film.image" :alt="Film.title" class="film-item"/>
      <div class="film-details">
        <div>{{ Film.release_date }}</div>
        <div>{{ Film.director }}</div>
        <div>{{ Film.producer }}</div>
        <div>{{ Film.description }}</div>
        <div>{{ Film.rt_score }}</div>
      </div>
    </div>
  </NuxtLink>
</template>
  
<script setup lang="ts">
const props = defineProps ({
  Film: {
    type: Object as PropType<Film>, //this line can be removed but some types mighty not be enforced
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.film-item {
  width: 150px;
  height: 200px;
  object-fit: cover; /* Ensures image fills container while maintaining aspect ratio */
  .film-details {
    opacity: 0;
    transition: opacity 0.3s ease-in-out; /* Adjust transition duration as needed */
  }
  &:hover .film-details {
    opacity: 1;
  }
}
</style>