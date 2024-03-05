<template>
  <NuxtLink :to="`/charactersIndividual/${Chara.id}`" >
    <div class="character-wrapper">
      <h4>{{ Chara.name }}</h4>
      <div class="character-item-wrapper">
        <img :src="Chara.image_path" :alt="Chara.name" class="character-item"/>
        <div class="character-details">
          <div>{{ Chara.gender }}</div>
          <div>{{ Chara.age }}</div>
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
    transition: transform 0.3s ease-in-out;
    img {
    border-radius: 50%;
    }
  }
  
  .character-item {
    width: 150px;
    height: 200px;
    box-shadow: 0 20px 20px 5px rgba(0, 0, 0, 0.8);
    object-fit: cover;
    position: relative;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8)); /* Add inner glow effect */
    transition: filter 0.2s ease-in-out, transform 0.3s ease-out;
  }

  .character-details {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, transform 0.2s ease-out, visibility 0s linear 0.3s;
    position: absolute;
    top: 90%;
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
    /* Slide down smoothly on hover */
    transform: translateY(-100%);
    opacity: 1;
    visibility: visible;
  }

  .character-item-wrapper:not(:hover) .character-details {
  /* Slide down on mouse out */
  transform: translateY(50%);
  opacity: 0;
  visibility: hidden;
  }

  .character-item-wrapper:hover .character-item {
  transform: scale(1.3); /* Increase size on hover */
  filter: brightness(125%) drop-shadow(0 0 200px rgba(87, 194, 167, 0.973));
  }

  .character-item-wrapper:not(:hover) .character-item {
    filter: brightness(80%) drop-shadow(0 0 5px rgba(0, 0, 0, 0.3)); /* Default shadow for non-hovered items */
  }
</style>