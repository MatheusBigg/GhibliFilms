<template>
  <NuxtLink :to="`/films/${Film.id}`" >
    <div class="film-wrapper">
      <h4>{{ Film.title }}</h4>
      <div class="film-item-wrapper">
        <img :src="Film.image" :alt="Film.title" class="film-item"/>
        <div class="film-details">
          <div><i>{{ Film.release_date }}</i></div>
          <div><b>{{ Film.director }}</b></div>
          <div><b>{{ Film.producer }}</b></div>
          <div>Rating: {{ Film.rt_score }}</div>
        </div>
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
.film-wrapper {
  position: relative;
  margin-bottom: 20px; /* Adjust as needed */
}

.film-item-wrapper {
  position: relative;
}

.film-item {
  width: 150px;
  height: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  object-fit: cover;
  position: relative;
}

.film-details {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0s linear 0.3s;
  position: absolute;
  top: 70%;
  left: 0;
  right: 0;
  background-color: rgba($color: #292929, $alpha: 1.0); 
  color: rgba($color: #ffffff, $alpha: 1.0);
  width: auto; /* Adjust width as needed */
  height: auto; /* Adjust height as needed */
  padding: 10px; 
  border-radius: 7px; /* Add border-radius as needed */
  z-index: 1; /* Ensure the details appear above the image */
}

.film-item-wrapper:hover .film-details {
  opacity: 1;
  visibility: visible;
}
</style>