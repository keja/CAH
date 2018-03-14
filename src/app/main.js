import Vue from 'vue';
import App from './index';
import Game from './components/Game';

import Answer from './components/Answer';
import Card from './components/Card';


Vue.component('card', Card);
Vue.component('answer', Answer);
Vue.component('game', Game);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  render: h => h(App)
});
