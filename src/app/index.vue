<template>
  <div id="app" class="">

    <div id="status">
      <p>Cards played</p>
      <div class="white circle">0/1</div>
      <div class="red circle">0/1</div>
    </div>

    <game></game>

  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style lang="scss">
// hide the original card that are being dragged.
.draggable-source--is-dragging {
  //opacity: 0;
}
body {
  background-color: gray;
  font-family: Helvetica, Arial, sans-serif;
}
#status {
  position: absolute;
  top: 0;
  right: 0;

  .circle {
    font-size: 22px;
    text-align: center;
    vertical-align: middle;
    line-height: 80px;
    margin: 10px;
    border: 1px solid #c0c0c0;
    border-radius: 50%;
    min-width: 80px;
    min-height: 80px;
    &.white {
      background-color: #fff;
    }
    &.red {
      background-color: red;
    }
  }

}
</style>
