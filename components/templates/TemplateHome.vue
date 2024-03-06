<template>
    <div class="home-template">
        <AtomsPageTitle text="Studio Ghibli" strong="スタジオジブリ" />
        <OrganismsFilmList />
    </div>
</template>

<style lang="scss" scoped>
.home-template {
  display: grid;
  grid-gap: 1rem;
}

/* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
  .home-template {
    grid-gap: 2rem;
  }
}
</style>