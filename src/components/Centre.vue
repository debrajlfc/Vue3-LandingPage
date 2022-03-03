<template>
  <div
    class="d-flex flex-row align-items-centre justify-content-centre w-100 flex-grow-1"
  >
    <div class="m-auto">
      <button v-on:click="say('hi')" type="button" class="btn btn-primary m-2">
        Button-1
      </button>
      <button type="button" class="btn btn-primary m-2" @click="gotoHome()">
        Button-2
      </button>
      <button type="button" class="btn btn-primary m-2" @click="gotoPage()">
        Button-3
      </button>
      <button type="button" class="btn btn-primary m-2" @click="togglefooTer">
        Button-4
      </button>
      <button type="button" class="btn btn-primary m-2" @click="togglenavBar">
        Button-5
      </button>
      <button
        type="button"
        class="btn btn-primary m-2"
        @click="gotoInformaTion()"
      >
        Button-6
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CenTre",
  data() {
    return {
      navHide: false,
    };
  },
  methods: {
    say: function (message) {
      alert(message);
    },

    gotoHome() {
      this.$router.push("/check");
    },
    gotoPage() {
      let routeData = this.$router.resolve({
        name: "Home",
        query: { data: "someData" },
      });
      window.open(routeData.href, "/check");
    },
    togglenavBar: function () {
      this.$store.commit("showHidenavBar");
    },
    togglefooTer: function () {
      this.$store.commit("showHidefooTer");
    },
    gotoInformaTion() {
      this.$router.push("/information");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
