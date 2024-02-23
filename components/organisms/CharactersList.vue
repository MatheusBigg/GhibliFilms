<template>
      <div class="characters">
        <button @click="showCharacters">Ver todos</button>
          <AtomsCharacterComponent v-for="chara in allCharacters" :key="chara.id" :Chara="chara"/>
      </div>
  </template>
  
  <script setup lang="ts">
  const {data: allCharacters } = await useFetch<Person[]>("https://ghibliapi.vercel.app/people/")
    const showCharacters = () => {
      const keys = Object.values(allCharacters);
      console.log("Characters:", keys[4][0]);
      const sorted = keys[4].value.sort((a, b) => a.name.localeCompare(b.name));
      console.log("Sorted:", sorted);
    
    }
    

  </script>
  
  <style lang="scss" scoped>
  .characters {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(7, 1fr);
    max-height: 600px; /* Adjust based on your needs */
    overflow-y: auto; /* Enable scrolling if necessary */
  }
  .h2 {
      font-size: 1.375rem;
      font-weight: 500;
      color: rgba($color: #292929, $alpha: 1.0);
  }
  </style>