<template>
    <div class="about-template">
        <AtomsPageTitle text="About " strong="Studio Ghibli"/>
        <OrganismsSmallPresentantion text="About Studio Ghibli" img_path="~/assets/statue.png"/>
    </div>
</template>

<style lang="scss" scoped>
.about-template {
  display: grid;
  grid-gap: 4rem;
}

/* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
  .about-template {
    grid-gap: 1rem;
  }
}
</style>