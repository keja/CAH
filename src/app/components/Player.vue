<script>
  /* eslint-disable no-new */
  /* eslint-disable no-console */
  import Vue from 'vue';

  export default new Vue({
    data: {
      cards: {
        hand: [
          { id: 'dgf2', content: 'This game' },
          { id: 'gfd32', content: 'Alcohol' },
          { id: 'jhfhdh3', content: 'Midgets' }
        ],
        table: []
      }
    },
    methods: {
      getHand() {
        return this.cards.hand;
      },
      getCard(id) {
        const index = this.cards.hand.findIndex(card => card.id === id);
        return this.cards.hand[index];
      },
      playCard(id) {
        // add card to the table (still in hands array, but not playable / is hidden)
        const index = this.cards.hand.findIndex(card => card.id === id);
        if (index) {
          const card = this.cards.hand[index];
          this.cards.table.push(card);
        }
      },
      clearTable() { // remove cards from the game - as they have been played
        this.cards.table.forEach((c) => {
          const index = this.cards.hand.findIndex(card => card.id === c.id);
          this.cards.hand.splice(index, 1);
        });
        this.cards.table = [];
      },
      drawCard() {
        // get new card's from server
      }
    }
  });
</script>