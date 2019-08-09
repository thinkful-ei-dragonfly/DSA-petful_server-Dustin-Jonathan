const { Queue } = require('../queue');

let dogs = new Queue();
let adoptedDogs = [];
dogs.enqueue({
  image:
    'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-1y0laje_50411b56.jpeg?height=354&region=0%2C0%2C400%2C225&width=630',
  name: 'Old Yeller',
  gender: 'Male',
  age: 5,
  breed: 'Yellow Mastador',
  story: 'Owner passed away'
});

dogs.enqueue({
  image: 'https://images.pexels.com/photos/1663413/pexels-photo-1663413.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  name: 'Choco Taco',
  gender: 'Male',
  age: 2,
  breed: 'Chocolate lab mix',
  story: 'Wandered into a comedy club'
});
dogs.enqueue({
  image: 'https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  name: 'Lily',
  gender: 'Female',
  age: 1,
  breed: 'Beagle',
  story: 'found by the railroad tracks'
});
dogs.enqueue({
  image: 'https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  name: 'Lemony',
  gender: 'Male',
  age: 1,
  breed: 'Husky',
  story: 'Born in the shelter'
});
dogs.enqueue({
  image: 'https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  name: 'Borgi',
  gender: 'Female',
  age: 4,
  breed: 'Corgi',
  story: 'Found swimming in a lake alone'
});

const DogService = {
  dogs,

  getDogs() {
    return this.dogs;
  },

  adoptDog() {
    adoptedDogs.push(dogs.dequeue());
    return dogs;
  },

  getAdoptedDogs() {
    return adoptedDogs;
  }
};

module.exports = DogService;
