const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    Recipe.create({
        title: 'Uštipci',
        level: 'Easy Peasy',
        ingredients: [
            '3 cups flour',
            '2 eggs',
            '1 tablespoon active dry yeast',
            '1 teaspoon salt',
            '1 cup warm milk',
            '1 teaspoon sugar',
            'Vegetable oil'],
        cuisine: 'Croatian',
        dishType: 'dessert',
        image: 'https://www.196flavors.com/wp-content/uploads/2019/09/ustipci-1.jpg',
        duration: 100,
        creator: 'Slavic people'
    }).then(recipe => { console.log('This recipe was created: ', recipe)})
        .catch(err => { console.log('Recipe was not created! Error: ', err)})
        
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
});
