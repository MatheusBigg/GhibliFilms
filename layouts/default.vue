<template>
  <div class="film-layout">
    <OrganismsSmallHeader />
    <BosonsConteudoContainer class="container" >
        <slot />
    </BosonsConteudoContainer>
    <OrganismsSmallFooter class="footer"/>
  </div>
</template>

<style lang="scss" scoped>
.film-layout {
  margin-top: 3rem;
  display: grid;
  grid-gap: 2rem;
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