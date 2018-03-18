<template>
  <div class="card" :id="this.id">
    <div :is="parseContext" class="context"></div>

    <div class="outer-drops">
      <div :class="['drops', 'card-count-' + addDropZones.length]" v-if="addDropZones">
        <div v-for="i in addDropZones.length" :class="['drop', 'drop-'+i]"></div>
      </div>
    </div>

  </div>
</template>

<script>
  /* eslint-disable no-console */
  import Player from './Player';

  export default {
    props: ['context', 'id'],
    data() {
      return {
        text: ['', '', '', '']
      };
    },
    methods: {
      convertLinesToAnswers(str) {
        const span = `<span>${str}</span>`;
        let index = -1;
        return span.replace(/(_)+/g, () => {
          index += 1;
          return `<answer str="${this.text[index]}"></answer>`;
        });
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
    },
    mounted() {
      // if black card, add event listener for played cards.
      if (this.addDropZones) {
        Player.$on('card:played', (evt) => {
          const card = Player.getCard(evt.card);
          this.$set(this.text, evt.targetIndex, card.content);
        });
        Player.$on('card:reset', (evt) => {
          this.$set(this.text, evt.sourceIndex, '');
        });
      }
    }
  };
</script>

<style lang="scss">

  $card-height: 300px;
  $card-width: 200px;
  $drop-width: $card-width + 44px; // 44 = margin - padding and borders
  $drop-height: $card-height + 44px;

  .card {
    padding: 20px;
    margin: 5px;
    font-weight: bold;
    // position: relative;
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

    .outer-drops {
      position: absolute;
      z-index: 10;
      left: 50%;
      top: 150px;

      .drops {
        position: relative;
        left: -50%;
        height: 100%;
        &.card-count-1 {
          width: ($drop-width*1) + (44px *1);
        }
        &.card-count-2 {
          width: ($drop-width*2) + (44px *2);
        }
        &.card-count-3 {
          width: ($drop-width*3) + (44px *3);
        }
        &.card-count-4 {
          width: ($drop-width*4) + (44px *4);
        }

        .drop {
          width: $drop-width;
          height: $drop-height;
          float: left;
          margin: 20px;
          border-radius: 22px;

          .card {
            margin: 0px;
          }
/*
          &:before {
            content: "Place card here";
            position: absolute;
            z-index: 1;
            top: 160px;
            left: 80px;
            color: darkgrey;
          }
*/
          &:nth-of-type(1) { border: 2px solid white; }
          &:nth-of-type(2) { border: 2px solid green; }
          &:nth-of-type(3) { border: 2px solid blue; }
          &:nth-of-type(4) { border: 2px solid red; }
        }

      }
    }

  }

</style>