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
          name: 'card-content',
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
    margin: 5px;
    font-weight: bold;
    position: relative;
    width: 200px;
    height: 300px;
    border-radius: 20px;
    &.black {
      border: 2px solid #000;
      background: #000;
      color: #fff;
    }
    &.white {
      border: 2px solid #fff;
      background: #fff;
      color: #000;
      &.b-red {
        border: 2px solid red;
      }
      &.b-green {
        border: 2px solid green;
      }
      &.b-blue {
        border: 2px solid blue;
      }
    }

  }

</style>