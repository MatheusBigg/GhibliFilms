<template>
  <NuxtLink :to="`/characters/${Chara.id}`" >
    <div class="character-wrapper">
      <h4>{{ Chara.name }}</h4>
      <div class="character-item-wrapper">
        <!-- <div class="character-item"></div> -->
        <img :src="Chara.image_path" :alt="Chara.name" class="character-item"/>
        <div class="character-details">
          <div>{{ Chara.gender }}</div>
          <div>{{ Chara.age }}</div>
          <!-- <br> -->
          <!-- <div><i>{{ Chara.species }}</i></div> -->
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
    
<script setup lang="ts">
  const props = defineProps ({
    Chara: {
      type: Object as PropType<Person>, //this line can be removed but some types mighty not be enforced
      required: true,
    },
  });
</script>
  
<style lang="scss" scoped>
  .character-wrapper {
    position: relative;
    margin-bottom: 20px; /* Adjust as needed */
  }
  .character-item-wrapper {
    position: relative;
  }
  .character-item {
    width: 150px;
    height: 200px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
    object-fit: cover;
    position: relative;
  }
  .character-details {
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
  .character-item-wrapper:hover .character-details {
    opacity: 1;
    visibility: visible;
  }
</style>