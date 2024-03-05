<template>
  <div class="film-layout">
    <OrganismsSmallHeader />
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
  margin-top: 3rem;
  display: grid;
  grid-gap: 2rem;
  background: linear-gradient(to bottom, white 0%, rgb(0, 255, 255) 50%, white 100%); /* Updated gradient definition */
  .container {
    padding-bottom: 2rem;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>