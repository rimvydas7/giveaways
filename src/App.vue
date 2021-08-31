<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All giveaways</router-link> |
      <router-link to="/giveaways/sort/:platform/:type/:sortBy"
        >Filter</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: rgb(98, 127, 225);
}

#nav a {
  margin: 20px;
  font-weight: bold;
  color: #2c3e50;
}
#nav a:hover {
  color: #e2e7eb;
}

#nav a.router-link-exact-active {
  color: #142cb3;
}
</style>
