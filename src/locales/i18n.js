import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      Name: "Name",
      Age: "Age",
      Role: "Role",
      en: "en",
      ChangeLanguage: "Change Language",
    },
    es: {
      Name: "Nombre",
      Age: "Anos",
      Role: "Papel",
      en: "es",
      ChangeLanguage: "cambiar idiom",
    },
  },
});
export default i18n;
