import Vue from "vue";
import App from "./App.vue";
import "./styles/styles.scss";
import PrimaryButton from "@/components/PrimaryButton.vue";

Vue.config.productionTip = false;
Vue.config.performance = true;

Vue.component("PrimaryButton", PrimaryButton);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
