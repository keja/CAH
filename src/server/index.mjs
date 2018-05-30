import http from 'http';
import socket from 'socket.io';

import Deck from './classes/Deck';
import Player from './classes/Player';

const server = http.createServer();
const io = socket(server);

const rules = {
  cardsOnHand: 3,
  minPlayerOnTable: 4,
  maxPlayersOnTable: 14
};

const tables = {
  default: {
    players: [],
    deck: new Deck().shuffel(),
    activeCard: null
  }
};

io.on('connection', function(client){
  const p = new Player(client);

  //if there is no active black card (first player, draws black card)
  if(!tables.default.activeCard){
    tables.default.activeCard = tables.default.deck.draw('black');
    console.log("Active card:", tables.default.activeCard.content);
  }

  // tell the new player what the current black card is.
  client.emit('card:black', tables.default.activeCard);
  client.on('card:played', (evt) => {
    console.log(evt);
  });

  // ensure player has cards
  if(p.cardCount() < rules.cardsOnHand){
    for(let i = p.cardCount(); i < rules.cardsOnHand; i++){
      const c = tables.default.deck.draw('white');
      if(c){ //if we managed to pick up a card (in case the deck is empty)
        p.addCard(c);
      }
    }
  }



  tables.default.players.push( p );
});


server.listen(3000);
