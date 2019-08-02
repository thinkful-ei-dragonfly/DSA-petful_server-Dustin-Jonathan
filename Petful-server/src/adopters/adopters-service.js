const { Queue } = require('../queue');

let adopters = new Queue();

adopters.enqueue('Harry Potter');

adopters.enqueue('Severis Snape');

const AdoptersService = {
  adopters,

  getAdopters() {
    return this.adopters;
  },
  
  newAdopter(name){
    adopters.enqueue(name);
    return adopters;
  },

  removeAdopter(){
    adopters.dequeue();
    return adopters;
  }
};

module.exports = AdoptersService;
