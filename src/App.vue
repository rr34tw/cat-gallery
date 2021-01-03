<template>
  <div id="app" class="bg-dark">
    <Nav />
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
    Home,
  },
};
</script>
