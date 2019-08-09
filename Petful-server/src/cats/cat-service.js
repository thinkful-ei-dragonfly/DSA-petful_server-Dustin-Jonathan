const { Queue } = require('../queue');

let cats = new Queue();
let adoptedCats = [];

cats.enqueue({
  image:
    'https://scontent.find1-1.fna.fbcdn.net/v/t1.0-9/30798_102597843119736_4949205_n.jpg?_nc_cat=104&_nc_oc=AQlqNjxordoXL50j6YntAX2OiP9vE9K7mgiZqHY0iPGV7bZKncB0Vk1v_m-th0r3gJ0&_nc_ht=scontent.find1-1.fna&oh=e72f72611a1f5ec0728c510af8e54223&oe=5DDE13CB',
  name: 'Sox',
  gender: 'Female',
  age: 12,
  breed: 'Domestic Short-hair',
  story: 'Owner could no longer take care of her'
});

cats.enqueue({
  image: 'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  name: 'Thor',
  gender: 'Male',
  age: 4,
  breed: 'Domestic Short-hair',
  story: 'Escaped from cat prison'
});
cats.enqueue({
  image: 'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  name: 'Allie',
  gender: 'Female',
  age: 5,
  breed: 'Domestic Short-hair',
  story: 'Loves herself doesn\'t care about people'
});
cats.enqueue({
  image: 'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  name: 'Ginger',
  gender: 'Male',
  age: 3,
  breed: 'Domestic Short-hair',
  story: 'Found in an ally'
});
cats.enqueue({
  image: 'https://images.pexels.com/photos/162318/cheetahs-cubs-two-together-162318.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  name: 'Thelmo and Lightning',
  gender: 'Females',
  age: 4,
  breed: 'Twin Spotted speed cats',
  story: 'Might be Cheetahs'
});

const CatService = {
  cats,

  getCats() {
    return this.cats;
  },
  adoptCat() {
    adoptedCats.push(cats.dequeue());
    return cats;
  }, 
  getAdoptedCats() {
    return adoptedCats;
  }
};

module.exports = CatService;
