<template>
    <div class="characters-template">
        <AtomsPageTitle text="Characters of " strong="Studio Ghibli"/>
        <OrganismsCharactersList />
        <OrganismsSmallPresentantion text="Wallpaper of Studio Ghibli" img_path="@/assets/ghibli-characters.png"/>
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