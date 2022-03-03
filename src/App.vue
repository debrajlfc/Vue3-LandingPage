<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
<template>
  <div class="h-100 w-100 d-flex flex-column">
    <NavBar />
    <router-view />
    <FooTer />
  </div>
  <!--<div class="app">
    <router-view />
  </div>-->
</template>

<style></style>
