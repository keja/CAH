<template>
  <div id="game">
    <card class="black" context="I got 99 problems but ___________ ain't one. __"></card>
    <card class="white" context="This game"></card>
  </div>
</template>
<script>
  import { Draggable } from '@shopify/draggable';

  export default {
    data() {
      return {

      };
    },
    mounted() {
      /* eslint-disable no-unused-vars */
      /* eslint-disable no-console */
      const move = new Draggable(this.$el, {
        draggable: '.card.white'
      });
      /*
      move.on('drag:start', (dragEvent) => {
        dragEvent.originalSource.classList.add('hidden');
      });
      move.on('drag:stop', (dragEvent) => {
        dragEvent.originalSource.classList.remove('hidden');
      });
      */
    }
  };
</script>

<style>
#game {
  position: relative;
}
</style>