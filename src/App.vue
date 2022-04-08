<template>
  <div id="app">
    <HeadMenu />
    <router-view id="view" :key="$route.name + ($route.query.name || '')"/>
    <BottomMenu />
  </div>
</template>
<script>
// @ is an alias to /src

import HeadMenu from './components/home/HeadMenu.vue'
import BottomMenu from './components/home/bottomMenu.vue'
export default {
  name: 'app',
  components: {
    HeadMenu,
    BottomMenu
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#view {
  padding-top: 76px;
}
div {
  font-family:"Times New Roman",Georgia,Serif;
}
p {
  font-family:"Times New Roman",Georgia,Serif;
}
span {
  font-family:"Times New Roman",Georgia,Serif;
}
</style>
