<template>
  <nav>
    <router-link to="/HomeView">Home</router-link> |
    <router-link to="/Raspored">Raspored</router-link>  |
    <router-link to="/Sportskedvorane">Sportskedvorane</router-link>  |
    <router-link to="/Zatrazidvoranu">Zatrazi dvoranu</router-link> |
    <router-link to="/">Login</router-link>
    <router-view/>
  </nav>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
