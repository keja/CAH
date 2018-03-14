<template>
  <div id="game">
    <div id="status">
      <p>Cards played: {{ date }}</p>
      <div class="white circle">0/1</div>
      <div class="red circle">0/1</div>
    </div>

    <card class="black" context="I got 99 problems but ___________ ain't one."></card>
    <card class="white" context="This game"></card>
  </div>
</template>
<script>
  import { Draggable } from '@shopify/draggable';

  export default {
    data() {
      return {
        date: new Date()
      };
    },
    mounted() {
      setInterval(() => {
        this.date = new Date();
      }, 1000);

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