<template>
    <div class="characters-template">
        <AtomsPageTitle text="Characters of " strong="Studio Ghibli"/>
        <OrganismsCharactersList />
        <OrganismsSmallPresentantion text="Studio Ghibli Fan-Art" img_path="characters/ghibli-characters.png"/>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.characters-template {
  display: grid;
  grid-gap: 2rem;
}

/* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
  .characters-template {
    grid-gap: 1rem;
  }
}
</style>