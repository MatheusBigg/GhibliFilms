<template>
  <div>
    <header class="header">
        <nav>
            <ul class="items">
                <li class="items">
                    <NuxtLink to="/">
                        <AtomsGhibliLogo class="logo"/>
                    </NuxtLink>
                </li>
                <li class="items">
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="items">
                    <NuxtLink to="/characters">Characters</NuxtLink>
                </li>
                <li class="items">
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  justify-content: center;
  nav {
    box-shadow: -1px 8px 26px 5px rgba(0, 0, 0, 0.12);
    background: rgba($color: #181818, $alpha: 1.0);
    width: 500px;
    height: 80px;
    padding: 0 5px;
    border-radius: 35px;
    align-items: center;
    .items {
      display: grid;
      grid-template-columns: repeat(4, auto);
      align-items: center;
      justify-content: space-around;
      height: 100%;
      font-size: 24px;
      .logo {
        width: 65px;
      }
    }
    .items a {
      color: rgba($color: #ffffff, $alpha: 1.0);;
      position: relative;
      font-weight: 500;
      &.nuxt-link-exact-active:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: rgb(255, 255, 255);
        left: 0;
        bottom: -15px;
      }
    }
  }
}

</style>
