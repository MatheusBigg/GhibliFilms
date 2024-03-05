<template>
    <div v-if="isDataLoaded">
      <h1>{{ chara?.name }}</h1>
      <div class="layout">
        <img :src="chara?.image_path" :alt="chara?.name" class="character-item"/>
      <div>
      <i>Gender: {{ chara?.gender }}</i><br />
      <i>Age: {{ chara?.age }}</i><br />
      <i>Eye Color: {{ chara?.eye_color }}</i><br />
      <i>Hair Color: {{ chara?.hair_color }}</i><br />
      <i>Species: {{ rawSpecie?.name }}</i><br />
      <i>Classification: {{ rawSpecie?.classification }}</i>
      </div>
    </div>
    </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const charId = route.params.id;
  //console.log('Character ID:' + charId);

  const {data: rawCharacter } = await useFetch<Person>(`https://ghibliapi.vercel.app/people/${charId}`);
  //console.log(rawCharacter);
 
  const chara = computed(() => {
    if (rawCharacter.value) {
      const person = toRaw(rawCharacter.value);

      if (person.name === "Kanta Ōgaki") {
        person.image_path = "../characters/Kanta Ogaki.jpg";
      } else {
        person.image_path = `../characters/${person.name}.jpg`;
      }

      return person;
    } else {
      return null; // Or return a placeholder value while loading
    }
  });
  if (chara.value) {
    console.log('Character Species: ' + chara.value.species);
  }

  const rawSpecie = ref<Species | null>(null);
  watch(chara, async (newChara) => {
    if (newChara) {
    // console.log(newChara.species);
    const { data: rawSpecieData } = await useFetch<Species>(`${newChara.species}`);
    console.log(rawSpecieData.value);
    rawSpecie.value = toRaw(rawSpecieData.value);
    console.log(rawSpecie.value?.name);
  }
  }, {
    immediate: true
  });

  const isDataLoaded = computed(() => chara.value && rawSpecie.value);

</script>

<style lang="scss" scoped>
  .layout {
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    font-size: xx-large;
    img {
      max-width: 100%;
    }
  }

  /* Styles for narrower screens (e.g., mobile) */
  @media (max-width: 768px) {
    h1 {
      text-align: center;
      margin: auto;
    }
    .layout {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      font-size: medium;
      img {
        width: 90%;
        margin: 0 auto;
      }
      div {
        text-align: center;
        margin: 1rem 1rem;
      }
    }
  }
</style>