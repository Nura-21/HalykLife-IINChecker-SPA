<template>
  <div id="app">
    <search-page></search-page>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchPage from "@/pages/SearchPage.vue";

export default Vue.extend({
  name: "App",
  components: { SearchPage },
});
</script>
