<script>
  import io from 'socket.io-client';
  /* eslint-disable no-console */
  export default {
    connect(host) {
      this.handle = io(host);
      this.handle.on('connect', (evt) => {
        // hello
        console.log('connection', evt);
      });
    },
    on(event, callback) {
      this.handle.on(event, callback);
    }
    /* ,
    join(channel) {
      // todo: join lobby
    },
    leave(channel) {
      // todo: leave lobby
    }
    */
  };
</script>