<template>
  <div id="game">
    <card class="black" :id="this.black.id" :context="this.black.content"></card>

    <div class="player-deck">
      <card v-for="card in playerHand" :key="card.id" class="white" :context="card.content" :id="card.id"></card>
    </div>
  </div>
</template>
<script>
  import { Droppable } from '@shopify/draggable';
  import Player from './Player';
  import Server from './Server';

  export default {
    data() {
      return {
        black: { id: 'not_loaded_yet', content: 'Loading..' }
      };
    },
    mounted() {
      Server.connect('http://localhost:3000');

      const droppable = new Droppable(this.$el, {
        draggable: '.card.white',
        droppable: '.player-deck, .drop',
        mirror: {
          constrainDimensions: true,
        }
      });
      let droppableOrigin;
      droppable.on('drag:start', (evt) => {
        droppableOrigin = evt.originalSource.parentNode.dataset.droppable;
      });
      droppable.on('drag:stop', (evt) => {
        // slot element (element being dragged from)
        const source = evt.originalSource.parentElement;
        setTimeout(() => {
          // card element (element being dragged)
          const card = evt.data.originalSource.getAttribute('id');

          // slot element (element being dropped into)
          const target = evt.data.originalSource.parentElement;

          // action = target type: slot (card:played) or player-deck (card:reset)
          const action = target.classList.contains('drop') ? 'card:played' : 'card:reset';

          // target slot index
          const targetIndex = Array.prototype.indexOf.call(target.parentElement.children, target);

          // source slot index (if card is removed from slot)
          let sourceIndex = 0;
          if (!source.classList.contains('player-deck')) {
            // calculate zero based index from classname (drop-1, drop-2, ect)
            sourceIndex = parseInt(source.className.split('-')[1], 16) - 1;
          }

          Player.$emit(action, { card, target, targetIndex, sourceIndex });
        }, 1);
      });
      droppable.on('droppable:over', (evt) => {
        if (droppableOrigin !== evt.droppable.dataset.droppable) {
          evt.cancel();
        }
      });

      // Player.$on('card:played', evt => Player.playCard(evt.card));
      Server.on('card:black', (card) => {
        // this.$set(this, 'black', card);
        this.black = card;
      });
      Server.on('player:handChange', (hand) => {
        Player.$data.cards.hand = hand;
      });
    },
    computed: {
      playerHand() {
        return Player.getHand();
      }
    }
  };
</script>

<style lang="scss">
#game {


  .player-deck {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 300px;

    .card {
      float: left;
    }
  }
}
</style>