<template>
  <h2>All Films</h2>
    <div class="releases">
        <AtomsFilmComponent 
        v-for="film in allFilms" 
        :key="film.id" 
        :Film="film"/>
    </div>
</template>

<script setup lang="ts">
const {data: allFilms } = await useFetch<Film[]>("https://ghibliapi.vercel.app/films/")
// console.log(allFilms);

</script>

<style lang="scss" scoped>
.releases {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(7, 1fr);
  //max-height: 600px; /* Adjust based on your needs */
  //overflow-y: auto; /* Enable scrolling if necessary */
}
.h2 {
    font-size: 1.375rem;
    font-weight: 500;
    color: rgba($color: #292929, $alpha: 1.0);
}

/* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
  .releases {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: 3rem;
  }
}
</style>