export default class Card {
  constructor(color, content){
    this.id = Date.now() + Math.random();
    this.color = color;
    this.content = content;
  }
  toString(){
    return this.content;
  }
}