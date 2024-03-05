<template>
  <div class="characters">
    <!-- <button @click="showCharacters">Ver todos</button> -->
    <AtomsCharacterComponent v-for="chara in sortedCharacters" :key="chara.id" :Chara="chara"/>
  </div>
</template>
  
<script setup lang="ts">
  const {data: allCharacters, error } = await useFetch<Person[]>("https://ghibliapi.vercel.app/people/")
  //console.log(toRaw(allCharacters.value)); //toRaw because there is a proxy in it

  if (error.value) {
    console.error('Error fetching data:', error.value);
    // Display an error message or implement retry logic here
  }
  
  const rawCharacters = computed(() => {
    if (allCharacters.value) {
      // Insert the image key and its paths
      return toRaw(allCharacters.value).map((person) => {
        if (person.name === "Kanta Ōgaki") {
          person.image_path = "characters/Kanta Ogaki.jpg";
        } else {
          person.image_path = `characters/${person.name}.jpg`;
        }
      return person;
    });
    } else {
      return []; // Or return a placeholder value while loading
    }
  });
  //Sort the characters
  const sortedCharacters = rawCharacters.value.sort((a, b) => a.name.localeCompare(b.name));


  const showCharacters = () => {
    //console.log("All characters:", toRaw(rawCharacters.value));
    //console.log("Sorted:", sortedCharacters);
  }

</script>
  
<style lang="scss" scoped>
  .characters {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(7, 1fr);
    //max-height: 600px; /* Adjust based on your needs */
    //overflow-y: auto; /* Enable scrolling if necessary */
  }
  // .h2 {
  //     font-size: 1.375rem;
  //     font-weight: 500;
  //     color: rgba($color: #292929, $alpha: 1.0);
  // }

  /* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
  .characters {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: 2rem;
    align-items: center;
    justify-items: center;
  }
}
</style>