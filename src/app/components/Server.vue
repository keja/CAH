<script>
  import io from 'socket.io-client';

  export default {
    connect() {
      this.handle = io('http://localhost:3000');
      this.handle.on('connect', (evt) => {
        // hello
        console.log('connection', evt);
      });
    }
  };
</script>