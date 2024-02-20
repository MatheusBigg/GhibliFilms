<template>
  <footer class="footer">
      <BosonsConteudoContainer class="container">
          <AtomsGhibliLogo class="logo"/>
          <p>Copyright ©  {{ currentYear }} MattBigg</p> 
      </BosonsConteudoContainer>
  </footer>
</template>

<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100px;
  background: rgba($color: #181818, $alpha: 1.0);
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 70px;
    }
    p {
      color: rgba($color: #ffffff, $alpha: 1.0);
    }
  }
}
</style>
