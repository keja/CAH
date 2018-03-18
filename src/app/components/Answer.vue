<template>
  <span class="answer" v-html="content"></span>
</template>
<script>
  export default {
    props: ['str'],
    computed: {
      content() {
        return this.str && this.str.length > 0 ? this.str : '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      }
    }
  };
</script>

<style lang="scss">
  .card {
    .context {
      .answer {
        text-decoration: underline;
        &:nth-of-type(1) { color: white; }
        &:nth-of-type(2) { color: green; }
        &:nth-of-type(3) { color: blue; }
        &:nth-of-type(4) { color: red; }
      }
    }
  }
</style>