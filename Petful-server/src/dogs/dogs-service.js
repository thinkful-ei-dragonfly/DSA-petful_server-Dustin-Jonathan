const { Queue } = require('../queue')

let dogs = new Queue()
let adoptedDogs = [];
dogs.enqueue(
  {
    image: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-1y0laje_50411b56.jpeg?height=354&region=0%2C0%2C400%2C225&width=630',
    name: 'Old Yeller',
    gender: 'Male',
    age: 5,
    breed: 'Yellow Mastador',
    story: 'Owner passed away'
  }
)

dogs.enqueue({
  image: '',
  name: 'Casey',
  gender: 'Female',
  age: 10,
  breed: 'Black lab',
  story: 'Thrown out on the street'
})

const DogService = {

  dogs,

  getDogs() { return this.dogs; },

  adoptDog(){
    adoptedDogs.push(dogs.dequeue());
    return dogs;
  },

  getAdoptedDogs() {
    return adoptedDogs;
  }


};


module.exports = DogService;
