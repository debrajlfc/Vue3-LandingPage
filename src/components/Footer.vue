<template>
  <footer v-if="fooTerStatus()" class="footer mt-auto py-3 bg-light">
    <div class="d-flex flex-column align-items-center justify-content-center">
      &copy; Copyright
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer-d",
  methods: {
    fooTerStatus: function () {
      return this.$store.state.fooTer;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
