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

/* Styles for narrower screens (e.g., mobile) */
@media (max-width: 768px) {
  .footer {
    display: block; /* Important for margin: auto to work horizontally */
    width: 100%;  /* Adjust width as needed */
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    .container {
      width: 90%;
    }
  }
}
</style>
