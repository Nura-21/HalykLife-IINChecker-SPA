<template>
  <button id="btn-primary" class="btn btn-primary" @click="$emit('emitClick')">
    {{ text }}
  </button>
</template>

<script lang="ts">
export default {
  name: "PrimaryButton",
  props: {
    text: {
      type: String,
      default: null,
    },
  },
};
</script>
