<template>
  <div id="app" class="">

    <game></game>

  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style lang="scss">
.hidden { display: none; }
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
