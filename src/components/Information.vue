<template>
  <div
    class="d-flex flex-row align-items-centre justify-content-centre w-100 flex-grow-1"
  >
    <div class="m-auto">
      <button type="button" class="btn btn-primary m-2" @click="toggleLanguage">
        {{ $t("ChangeLanguage") }}
      </button>
      <h4 class="d-inline-block">{{ $t("en") }}</h4>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">{{ $t("Name") }}</th>
            <th scope="col">{{ $t("Age") }}</th>
            <th scope="col">{{ $t("Role") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="name in info.information" :key="name.Name">
            <td>{{ name.Name }}</td>
            <td>{{ name.Age }}</td>
            <td>{{ name.Role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "InformaTion",
  components: {},

  data() {
    return {
      info: [],
    };
  },

  beforeMount() {
    let self = this;
    this.axios.get("phpmyadmin/db.php").then((response) => {
      console.log(response.data);
      self.info = response.data;
    });
  },
  methods: {
    toggleLanguage() {
      this.$store.commit("toggleLanguage");
      this.$i18n.locale = this.$store.state.language;
    },
  },
};
</script>
