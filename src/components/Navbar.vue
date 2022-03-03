<template>
  <nav
    id="navbar"
    v-if="navBarStatus()"
    :class="{
      'navbar navbar-expand-lg navbar-dark bg-dark w-100': navClass,
      hide: isHide,
    }"
  >
    <!---->
    <div
      class="container-fluid align-content-center justify-content-center text-white"
    >
      I'm Header
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar-d",
  data() {
    return {
      navClass: true,
      isHide: false,
    };
  },
  methods: {
    navBarStatus: function () {
      return this.$store.state.navBar;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
