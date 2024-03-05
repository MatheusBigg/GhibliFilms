<template>
    <div v-if="film">
      <h1>{{ film.title }}</h1>
      <div class="layout">
      <img :src="film.image" :alt="film.title" />
      <div>
      <p><b>{{ film.description }}</b></p><br />
      <i>Release Date: {{ film.release_date }}</i><br />
      <i>Director: {{ film.director }}</i><br />
      <i>Producer: {{ film.producer }}</i><br />
      <b>Rating: {{ film.rt_score }}</b>
      </div>
    </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
    //Defining the kind (structure) of object that is going to be returned from useFetch
    // const props = defineProps ({
    //   Film: {
    //     type: Object as PropType<Film>, 
    //     required: true,
    //   },
    // });

    const route = useRoute();
    const filmId = route.params.id;
    console.log(filmId);

    const {data: film } = await useFetch<Film>(`https://ghibliapi.vercel.app/films/${filmId}`);

</script>

<style lang="scss" scoped>
  .layout {
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    font-size: x-large;
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