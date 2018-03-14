<template>
  <span class="answer">______</span>
</template>
<script>
  export default {

  };
</script>

<style lang="scss">
  .card {
    .context {
      .answer {
        &:nth-of-type(1) { color: red; }
        &:nth-of-type(2) { color: green; }
        &:nth-of-type(3) { color: blue; }
      }
    }
  }
</style>