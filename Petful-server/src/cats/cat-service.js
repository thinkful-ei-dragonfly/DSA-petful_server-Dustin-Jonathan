

const CatService = {
  
  cats: [
    {
      image: 'https://scontent.find1-1.fna.fbcdn.net/v/t1.0-9/30798_102597843119736_4949205_n.jpg?_nc_cat=104&_nc_oc=AQlqNjxordoXL50j6YntAX2OiP9vE9K7mgiZqHY0iPGV7bZKncB0Vk1v_m-th0r3gJ0&_nc_ht=scontent.find1-1.fna&oh=e72f72611a1f5ec0728c510af8e54223&oe=5DDE13CB',
      name: 'Sox',
      gender: 'Female',
      age: 12,
      breed: 'Domestic Short-hair',
      story: 'Owner could no longer take care of her'
    },
    {
      image: '',
      name: 'Miss Prissy',
      gender: 'Female',
      age: 4,
      breed: 'Domestic Short-hair',
      story: 'Owner could no longer take care of her'
    }
  ],
  
  getCats() {return this.cats;},
};


module.exports = CatService;
