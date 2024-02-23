<template>
    <div class="characters-template">
        <AtomsPageTitle text="Characters of " strong="Studio Ghibli"/>
        <OrganismsSmallPresentantion text="All Characters" img_path="@/assets/ghibli-characters.png"/>
        <OrganismsCharactersList />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.characters-template {
  display: grid;
  grid-gap: 2rem;
}
</style>