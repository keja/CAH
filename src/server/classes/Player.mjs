export default class Player {
  constructor(socket){
    this.name = "kenneth";
    this.hand = [];
    this.client = socket;

    console.log("we have a new player:", this.client.client.id, `(kenneth)`);
  }


  // CARDS
  cardCount(){
    return this.hand.length;
  }
  addCard(card){
    console.log(this.name, "got", card);
    this.hand.push(card);

    this.client.emit("player:handChange", this.hand);
  }
  removeCard(){

  }


}