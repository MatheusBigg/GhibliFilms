<template>
    <div class="container">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding-top: 1rem;
  max-height: 1800px;
  max-width: 1400px;
  //background-color: rgba($color: #ff1b1b, $alpha: 0.2);
}
</style>