import Card from './Card.mjs';

export default class Deck {

  constructor(file){
    console.log("Deck are up");
    this.stack = {
      white: [
        new Card('white', 'Midget'),
        new Card('white', 'Alcohol'),
        new Card('white', 'Drugs'),
        new Card('white', 'Code'),
        new Card('white', 'Your mom'),
        new Card('white', 'A bus'),
        new Card('white', 'House of Cards'),
        new Card('white', 'Fiskefar'),
      ],
      black: [
        new Card('black', 'I got 99 problems but ___________ ain\'t one.'),
        new Card('black', '__________? There\'s a app for that.'),
        new Card('black', 'Why can\'t I sleep at night?'),
        new Card('black', 'What\'s that smell?'),
      ]
    };
  }

  shuffel(){
    const rnd = function(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    this.stack.white = rnd(this.stack.white);
    this.stack.black = rnd(this.stack.black);

    return this;
  }

  draw(type = 'white'){
    if(!this.stack[type].length){
      return false;
    }
    return this.stack[type].pop();
  }

};