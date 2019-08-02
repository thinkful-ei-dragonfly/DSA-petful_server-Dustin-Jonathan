

const DogService = {
  
  dogs: [
    {
      image: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-1y0laje_50411b56.jpeg?height=354&region=0%2C0%2C400%2C225&width=630',
      name: 'Old Yeller',
      gender: 'Male',
      age: 5,
      breed: 'Yellow Mastador',
      story: 'Owner passed away'
    },
    {
      image: '',
      name: 'Casey',
      gender: 'Female',
      age: 10,
      breed: 'Black lab',
      story: 'Thrown out on the street'
    },
  ],
  
  getDogs() {return this.dogs;},
};


module.exports = DogService;
