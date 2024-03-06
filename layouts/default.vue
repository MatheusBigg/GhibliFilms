<template>
  <div class="film-layout">
    <div class="upper">
    <img src="../assets/film_ghibli_upper.jpg" alt="Ghibli_Upper" class="upper-img" />
    </div>
    <OrganismsSmallHeader class="header"/>
    <BosonsConteudoContainer class="container" >
      <div>
      <slot />
    </div>
    </BosonsConteudoContainer>
    <OrganismsSmallFooter class="footer"/>
  </div>
</template>

<style lang="scss" scoped>

.film-layout {
  display: grid;
  grid-gap: 3rem;

  .upper {
    grid-area: 1 / 1; /* Occupies the entire grid area */
    position: relative;
    margin-bottom: -14.5rem;
    .upper-img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); /* Center the image */
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 0 0 50% 50%;
      z-index: -1; /* Place image behind other elements */
      border: 2px solid; /* Adjust thickness as needed */
      border-color: rgba($color: #ffffff, $alpha: 0.8);
      border-top: #ffffff;
      // border-left: #ffffff;
      // border-right: #ffffff;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    }
  }

  .header {
    position: sticky;
    margin-top: 3rem;
  }

  .container {
    padding-bottom: 2rem;
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    border: 2px solid; /* Adjust thickness as needed */
    border-color: rgba($color: #ffffff, $alpha: 0.8);
    border-bottom: #ffffff;
    border-left: #ffffff;
    border-right: #ffffff;
  }
}

/* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
  .footer {
    position: relative;
    margin-bottom: -5rem;
  }
}
</style>