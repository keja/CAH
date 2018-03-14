<template>
  <div class="card">
    <div :is="parseContext" class="context"></div>
  </div>
</template>

<script>
  export default {
    props: ['context'],
    methods: {
      convertLinesToAnswers(str) {
        const span = `<span>${str}</span>`;
        return span.replace(/(_)+/g, '<answer></answer>');
      }
    },
    computed: {
      parseContext() {
        return {
          template: this.convertLinesToAnswers(this.context),
          props: this.$options.props
        };
      }
    }
  };
</script>

<style lang="scss">

  .card {
    padding: 20px;
    font-family: Helvetica;
    font-weight: bold;
    position: relative;
    width: 200px;
    height: 300px;
    border: 1px solid #000;
    border-radius: 20px;
    &.black {
      background: #000;
      color: #fff;
    }

  }

</style>