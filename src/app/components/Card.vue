<template>
  <div class="card">
    <div :is="parseContext" class="context"></div>

    <div class="drops" v-if="addDropZones">
      <div v-for="i in addDropZones" class="drop"></div>
    </div>

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
      },
      addDropZones() {
        return this.context.match(/(_)+/g);
      }
    }
  };
</script>

<style lang="scss">

  $card-height: 300px;
  $card-width: 200px;

  .card {
    padding: 20px;
    margin: 5px;
    font-weight: bold;
    position: relative;
    width: $card-width;
    height: $card-height;
    border-radius: 20px;
    &.black {
      border: 2px solid #000;
      background: #000;
      color: #fff;
      margin: 0 auto;
    }
    &.white {
      border: 2px solid #fff;
      background: #fff;
      color: #000;
    }

    .drops {
      position: absolute;
      bottom: -200px;
      width: 100%;
      height: 100%;

      .drop {
        width: $card-width;
        height: $card-height;
        float: left;
        margin: 20px;
        border-radius: 20px;

        &:nth-of-type(1) { border: 2px solid white; }
        &:nth-of-type(2) { border: 2px solid green; }
        &:nth-of-type(3) { border: 2px solid blue; }
        &:nth-of-type(4) { border: 2px solid red; }
      }

    }

  }

</style>