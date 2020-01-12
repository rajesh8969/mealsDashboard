var path = require('path');
var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/MealsDB';
var str = "";
var bodyParser = require("body-parser");

 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
  /*MongoClient.connect('/mealslist', function(err, db) {
    db.collection('Meals').insertOne({
        "meals": [
          {
            "idMeal": "52823",
            "strMeal": "Salmon Prawn Risotto",
            "strDrinkAlternate": null,
            "strCategory": "Seafood",
            "strArea": "Italian",
            "strInstructions": "Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.\r\nAdd the rice and stir to coat all the grains in the butter\r\nAdd the wine and cook gently stirring until it is absorbed\r\nGradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender\r\nSeason with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through\r\nServe scattered with the Parmesan and seasonal vegetables.\r\nGrill the salmon and gently place onto the risotto with the prawns and asparagus",
            "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/xxrxux1503070723.jpg",
            "strTags": "Fish",
            "strYoutube": "https:\/\/www.youtube.com\/watch?v=V2PMvBv52IE",
            "strIngredient1": "butter",
            "strIngredient2": "onion",
            "strIngredient3": "rice",
            "strIngredient4": "white wine",
            "strIngredient5": "vegetable stock",
            "strIngredient6": "lemon",
            "strIngredient7": "King Prawns",
            "strIngredient8": "salmon",
            "strIngredient9": "asparagus",
            "strIngredient10": "black pepper",
            "strIngredient11": "Parmesan",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "50g\/2oz",
            "strMeasure2": "1 finely chopped ",
            "strMeasure3": "150g",
            "strMeasure4": "125ml ",
            "strMeasure5": "1 litre hot",
            "strMeasure6": "The juice and zest of one",
            "strMeasure7": "240g large",
            "strMeasure8": "150g",
            "strMeasure9": "100g tips blanched briefly in boiling water",
            "strMeasure10": "ground",
            "strMeasure11": "50g shavings",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": "",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "http:\/\/www.rangemaster.co.uk\/rangemaster-owners\/recipes-ideas-inspiration\/recipes\/mains\/prawn-and-hot-smoked-salmon-risotto-with-asparagus",
            "dateModified": null
          },
          {
            "idMeal": "52981",
            "strMeal": "Snert (Dutch Split Pea Soup)",
            "strDrinkAlternate": null,
            "strCategory": "Side",
            "strArea": "Dutch",
            "strInstructions": "Gather the ingredients.\r\n\r\nIn a large soup pot, bring water, split peas, pork belly or bacon, pork chop, and bouillon cube to a boil. Reduce the heat to a simmer, cover and let cook for 45 minutes, stirring occasionally and skimming off any foam that rises to the top. \r\n\r\nRemove the pork chop, debone, and thinly slice the meat. Set aside.\r\n\r\nAdd the celery, carrots, potato, onion, leek, and celeriac to the soup. Return to the boil, reduce the heat to a simmer and let cook, uncovered, for another 30 minutes, adding a little extra water if the ingredients start to stick to the bottom of the pot.\r\n\r\nAdd the smoked sausage for the last 15 minutes of cooking time. When the vegetables are tender, remove the bacon and smoked sausage, slice thinly and set aside.\r\n\r\nIf you prefer a smooth consistency, pur\u00e9e the soup with a stick blender. Season to taste with salt and pepper. Add the meat back to the soup, setting some slices of rookworst aside.\r\n\r\nServe in heated bowls or soup plates, garnished with slices of rookworst and chopped celery leaf.\r\n\r\nEnjoy!",
            "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/9ptx0a1565090843.jpg",
            "strTags": "Soup,Cake",
            "strYoutube": "https:\/\/www.youtube.com\/watch?v=5YV0sJLtLt8",
            "strIngredient1": "Water",
            "strIngredient2": "Peas",
            "strIngredient3": "Pork",
            "strIngredient4": "Vegetable Stock Cube",
            "strIngredient5": "Celery",
            "strIngredient6": "Carrots",
            "strIngredient7": "Potatoes",
            "strIngredient8": "Onion",
            "strIngredient9": "Leek",
            "strIngredient10": "Celeriac",
            "strIngredient11": "Sausages",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "2L",
            "strMeasure2": "300g",
            "strMeasure3": "100g ",
            "strMeasure4": "1",
            "strMeasure5": "2",
            "strMeasure6": "2",
            "strMeasure7": "1 large",
            "strMeasure8": "1 small",
            "strMeasure9": "1 small",
            "strMeasure10": "1 cup ",
            "strMeasure11": "1 pound",
            "strMeasure12": " ",
            "strMeasure13": " ",
            "strMeasure14": " ",
            "strMeasure15": " ",
            "strMeasure16": " ",
            "strMeasure17": " ",
            "strMeasure18": " ",
            "strMeasure19": " ",
            "strMeasure20": " ",
            "strSource": "https:\/\/www.thespruceeats.com\/traditional-dutch-split-pea-soup-1129011",
            "dateModified": null
          },
          {
            "idMeal": "52908",
            "strMeal": "Ratatouille",
            "strDrinkAlternate": null,
            "strCategory": "Vegetarian",
            "strArea": "French",
            "strInstructions": "Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a saut\u00e9 pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don\u2019t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.",
            "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/wrpwuu1511786491.jpg",
            "strTags": "Vegetables,SideDish",
            "strYoutube": "https:\/\/www.youtube.com\/watch?v=BFdQUgAFtGU",
            "strIngredient1": "Aubergine",
            "strIngredient2": "Courgettes",
            "strIngredient3": "Yellow Pepper",
            "strIngredient4": "Tomato",
            "strIngredient5": "Olive Oil",
            "strIngredient6": "Basil",
            "strIngredient7": "Onion",
            "strIngredient8": "Garlic Clove",
            "strIngredient9": "Red Wine Vinegar",
            "strIngredient10": "Sugar",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "2 large",
            "strMeasure2": "4",
            "strMeasure3": "2",
            "strMeasure4": "4 large",
            "strMeasure5": "5 tbs",
            "strMeasure6": "Bunch",
            "strMeasure7": "1 medium",
            "strMeasure8": "3 finely chopped",
            "strMeasure9": "1 tsp ",
            "strMeasure10": "1 tsp ",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": "",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "https:\/\/www.bbcgoodfood.com\/recipes\/2903\/ratatouille",
            "dateModified": null
          }
        ]
    });
  });
    var cursor = db.collection('Meals').find();
    console.log(cursor);*/
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('mode', 'no-cors');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});
 

var port = process.env.PORT || 8001;
app.listen(port, function() {
    console.log("Running vueApp on port " + port);
});

app.get('/mealslist', (req, res) => {
  res.json({"meals":[{"idMeal":"52823","strMeal":"Salmon Prawn Risotto","strDrinkAlternate":null,"strCategory":"Seafood","strArea":"Italian","strInstructions":"Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.\r\nAdd the rice and stir to coat all the grains in the butter\r\nAdd the wine and cook gently stirring until it is absorbed\r\nGradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender\r\nSeason with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through\r\nServe scattered with the Parmesan and seasonal vegetables.\r\nGrill the salmon and gently place onto the risotto with the prawns and asparagus","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xxrxux1503070723.jpg","strTags":"Fish","strYoutube":"https:\/\/www.youtube.com\/watch?v=V2PMvBv52IE","strIngredient1":"butter","strIngredient2":"onion","strIngredient3":"rice","strIngredient4":"white wine","strIngredient5":"vegetable stock","strIngredient6":"lemon","strIngredient7":"King Prawns","strIngredient8":"salmon","strIngredient9":"asparagus","strIngredient10":"black pepper","strIngredient11":"Parmesan","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"50g\/2oz","strMeasure2":"1 finely chopped ","strMeasure3":"150g","strMeasure4":"125ml ","strMeasure5":"1 litre hot","strMeasure6":"The juice and zest of one","strMeasure7":"240g large","strMeasure8":"150g","strMeasure9":"100g tips blanched briefly in boiling water","strMeasure10":"ground","strMeasure11":"50g shavings","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"http:\/\/www.rangemaster.co.uk\/rangemaster-owners\/recipes-ideas-inspiration\/recipes\/mains\/prawn-and-hot-smoked-salmon-risotto-with-asparagus","dateModified":null},{"idMeal":"52981","strMeal":"Snert (Dutch Split Pea Soup)","strDrinkAlternate":null,"strCategory":"Side","strArea":"Dutch","strInstructions":"Gather the ingredients.\r\n\r\nIn a large soup pot, bring water, split peas, pork belly or bacon, pork chop, and bouillon cube to a boil. Reduce the heat to a simmer, cover and let cook for 45 minutes, stirring occasionally and skimming off any foam that rises to the top. \r\n\r\nRemove the pork chop, debone, and thinly slice the meat. Set aside.\r\n\r\nAdd the celery, carrots, potato, onion, leek, and celeriac to the soup. Return to the boil, reduce the heat to a simmer and let cook, uncovered, for another 30 minutes, adding a little extra water if the ingredients start to stick to the bottom of the pot.\r\n\r\nAdd the smoked sausage for the last 15 minutes of cooking time. When the vegetables are tender, remove the bacon and smoked sausage, slice thinly and set aside.\r\n\r\nIf you prefer a smooth consistency, pur\u00e9e the soup with a stick blender. Season to taste with salt and pepper. Add the meat back to the soup, setting some slices of rookworst aside.\r\n\r\nServe in heated bowls or soup plates, garnished with slices of rookworst and chopped celery leaf.\r\n\r\nEnjoy!","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/9ptx0a1565090843.jpg","strTags":"Soup,Cake","strYoutube":"https:\/\/www.youtube.com\/watch?v=5YV0sJLtLt8","strIngredient1":"Water","strIngredient2":"Peas","strIngredient3":"Pork","strIngredient4":"Vegetable Stock Cube","strIngredient5":"Celery","strIngredient6":"Carrots","strIngredient7":"Potatoes","strIngredient8":"Onion","strIngredient9":"Leek","strIngredient10":"Celeriac","strIngredient11":"Sausages","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"2L","strMeasure2":"300g","strMeasure3":"100g ","strMeasure4":"1","strMeasure5":"2","strMeasure6":"2","strMeasure7":"1 large","strMeasure8":"1 small","strMeasure9":"1 small","strMeasure10":"1 cup ","strMeasure11":"1 pound","strMeasure12":" ","strMeasure13":" ","strMeasure14":" ","strMeasure15":" ","strMeasure16":" ","strMeasure17":" ","strMeasure18":" ","strMeasure19":" ","strMeasure20":" ","strSource":"https:\/\/www.thespruceeats.com\/traditional-dutch-split-pea-soup-1129011","dateModified":null},{"idMeal":"52908","strMeal":"Ratatouille","strDrinkAlternate":null,"strCategory":"Vegetarian","strArea":"French","strInstructions":"Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a saut\u00e9 pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don\u2019t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wrpwuu1511786491.jpg","strTags":"Vegetables,SideDish","strYoutube":"https:\/\/www.youtube.com\/watch?v=BFdQUgAFtGU","strIngredient1":"Aubergine","strIngredient2":"Courgettes","strIngredient3":"Yellow Pepper","strIngredient4":"Tomato","strIngredient5":"Olive Oil","strIngredient6":"Basil","strIngredient7":"Onion","strIngredient8":"Garlic Clove","strIngredient9":"Red Wine Vinegar","strIngredient10":"Sugar","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"2 large","strMeasure2":"4","strMeasure3":"2","strMeasure4":"4 large","strMeasure5":"5 tbs","strMeasure6":"Bunch","strMeasure7":"1 medium","strMeasure8":"3 finely chopped","strMeasure9":"1 tsp ","strMeasure10":"1 tsp ","strMeasure11":"","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"https:\/\/www.bbcgoodfood.com\/recipes\/2903\/ratatouille","dateModified":null}]});
});

app.get('/randommealslist', (req, res) => {
  res.json({"meals":[{"idMeal":"52823","strMeal":"Salmon Prawn Risotto","strDrinkAlternate":null,"strCategory":"Seafood","strArea":"Italian","strInstructions":"Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.\r\nAdd the rice and stir to coat all the grains in the butter\r\nAdd the wine and cook gently stirring until it is absorbed\r\nGradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender\r\nSeason with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through\r\nServe scattered with the Parmesan and seasonal vegetables.\r\nGrill the salmon and gently place onto the risotto with the prawns and asparagus","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/9ptx0a1565090843.jpg","strTags":"Fish","strYoutube":"https:\/\/www.youtube.com\/watch?v=V2PMvBv52IE","strIngredient1":"butter","strIngredient2":"onion","strIngredient3":"rice","strIngredient4":"white wine","strIngredient5":"vegetable stock","strIngredient6":"lemon","strIngredient7":"King Prawns","strIngredient8":"salmon","strIngredient9":"asparagus","strIngredient10":"black pepper","strIngredient11":"Parmesan","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"50g\/2oz","strMeasure2":"1 finely chopped ","strMeasure3":"150g","strMeasure4":"125ml ","strMeasure5":"1 litre hot","strMeasure6":"The juice and zest of one","strMeasure7":"240g large","strMeasure8":"150g","strMeasure9":"100g tips blanched briefly in boiling water","strMeasure10":"ground","strMeasure11":"50g shavings","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"http:\/\/www.rangemaster.co.uk\/rangemaster-owners\/recipes-ideas-inspiration\/recipes\/mains\/prawn-and-hot-smoked-salmon-risotto-with-asparagus","dateModified":null},{"idMeal":"52981","strMeal":"Snert (Dutch Split Pea Soup)","strDrinkAlternate":null,"strCategory":"Side","strArea":"Dutch","strInstructions":"Gather the ingredients.\r\n\r\nIn a large soup pot, bring water, split peas, pork belly or bacon, pork chop, and bouillon cube to a boil. Reduce the heat to a simmer, cover and let cook for 45 minutes, stirring occasionally and skimming off any foam that rises to the top. \r\n\r\nRemove the pork chop, debone, and thinly slice the meat. Set aside.\r\n\r\nAdd the celery, carrots, potato, onion, leek, and celeriac to the soup. Return to the boil, reduce the heat to a simmer and let cook, uncovered, for another 30 minutes, adding a little extra water if the ingredients start to stick to the bottom of the pot.\r\n\r\nAdd the smoked sausage for the last 15 minutes of cooking time. When the vegetables are tender, remove the bacon and smoked sausage, slice thinly and set aside.\r\n\r\nIf you prefer a smooth consistency, pur\u00e9e the soup with a stick blender. Season to taste with salt and pepper. Add the meat back to the soup, setting some slices of rookworst aside.\r\n\r\nServe in heated bowls or soup plates, garnished with slices of rookworst and chopped celery leaf.\r\n\r\nEnjoy!","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xxrxux1503070723.jpg","strTags":"Soup,Cake","strYoutube":"https:\/\/www.youtube.com\/watch?v=5YV0sJLtLt8","strIngredient1":"Water","strIngredient2":"Peas","strIngredient3":"Pork","strIngredient4":"Vegetable Stock Cube","strIngredient5":"Celery","strIngredient6":"Carrots","strIngredient7":"Potatoes","strIngredient8":"Onion","strIngredient9":"Leek","strIngredient10":"Celeriac","strIngredient11":"Sausages","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"2L","strMeasure2":"300g","strMeasure3":"100g ","strMeasure4":"1","strMeasure5":"2","strMeasure6":"2","strMeasure7":"1 large","strMeasure8":"1 small","strMeasure9":"1 small","strMeasure10":"1 cup ","strMeasure11":"1 pound","strMeasure12":" ","strMeasure13":" ","strMeasure14":" ","strMeasure15":" ","strMeasure16":" ","strMeasure17":" ","strMeasure18":" ","strMeasure19":" ","strMeasure20":" ","strSource":"https:\/\/www.thespruceeats.com\/traditional-dutch-split-pea-soup-1129011","dateModified":null},{"idMeal":"52908","strMeal":"Ratatouille","strDrinkAlternate":null,"strCategory":"Vegetarian","strArea":"French","strInstructions":"Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a saut\u00e9 pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don\u2019t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wrpwuu1511786491.jpg","strTags":"Vegetables,SideDish","strYoutube":"https:\/\/www.youtube.com\/watch?v=BFdQUgAFtGU","strIngredient1":"Aubergine","strIngredient2":"Courgettes","strIngredient3":"Yellow Pepper","strIngredient4":"Tomato","strIngredient5":"Olive Oil","strIngredient6":"Basil","strIngredient7":"Onion","strIngredient8":"Garlic Clove","strIngredient9":"Red Wine Vinegar","strIngredient10":"Sugar","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"2 large","strMeasure2":"4","strMeasure3":"2","strMeasure4":"4 large","strMeasure5":"5 tbs","strMeasure6":"Bunch","strMeasure7":"1 medium","strMeasure8":"3 finely chopped","strMeasure9":"1 tsp ","strMeasure10":"1 tsp ","strMeasure11":"","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"https:\/\/www.bbcgoodfood.com\/recipes\/2903\/ratatouille","dateModified":null}]});
});
app.get('/popularingredients', (req, res) => {
  res.json({"meals":[{"idMeal":"52823","strMeal":"Salmon Prawn Risotto","strDrinkAlternate":null,"strCategory":"Seafood","strArea":"Italian","strInstructions":"Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.\r\nAdd the rice and stir to coat all the grains in the butter\r\nAdd the wine and cook gently stirring until it is absorbed\r\nGradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender\r\nSeason with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through\r\nServe scattered with the Parmesan and seasonal vegetables.\r\nGrill the salmon and gently place onto the risotto with the prawns and asparagus","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xxrxux1503070723.jpg","strTags":"Fish","strYoutube":"https:\/\/www.youtube.com\/watch?v=V2PMvBv52IE","strIngredient1":"butter","strIngredient2":"onion","strIngredient3":"rice","strIngredient4":"white wine","strIngredient5":"vegetable stock","strIngredient6":"lemon","strIngredient7":"King Prawns","strIngredient8":"salmon","strIngredient9":"asparagus","strIngredient10":"black pepper","strIngredient11":"Parmesan","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"50g\/2oz","strMeasure2":"1 finely chopped ","strMeasure3":"150g","strMeasure4":"125ml ","strMeasure5":"1 litre hot","strMeasure6":"The juice and zest of one","strMeasure7":"240g large","strMeasure8":"150g","strMeasure9":"100g tips blanched briefly in boiling water","strMeasure10":"ground","strMeasure11":"50g shavings","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"http:\/\/www.rangemaster.co.uk\/rangemaster-owners\/recipes-ideas-inspiration\/recipes\/mains\/prawn-and-hot-smoked-salmon-risotto-with-asparagus","dateModified":null},{"idMeal":"52981","strMeal":"Snert (Dutch Split Pea Soup)","strDrinkAlternate":null,"strCategory":"Side","strArea":"Dutch","strInstructions":"Gather the ingredients.\r\n\r\nIn a large soup pot, bring water, split peas, pork belly or bacon, pork chop, and bouillon cube to a boil. Reduce the heat to a simmer, cover and let cook for 45 minutes, stirring occasionally and skimming off any foam that rises to the top. \r\n\r\nRemove the pork chop, debone, and thinly slice the meat. Set aside.\r\n\r\nAdd the celery, carrots, potato, onion, leek, and celeriac to the soup. Return to the boil, reduce the heat to a simmer and let cook, uncovered, for another 30 minutes, adding a little extra water if the ingredients start to stick to the bottom of the pot.\r\n\r\nAdd the smoked sausage for the last 15 minutes of cooking time. When the vegetables are tender, remove the bacon and smoked sausage, slice thinly and set aside.\r\n\r\nIf you prefer a smooth consistency, pur\u00e9e the soup with a stick blender. Season to taste with salt and pepper. Add the meat back to the soup, setting some slices of rookworst aside.\r\n\r\nServe in heated bowls or soup plates, garnished with slices of rookworst and chopped celery leaf.\r\n\r\nEnjoy!","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/9ptx0a1565090843.jpg","strTags":"Soup,Cake","strYoutube":"https:\/\/www.youtube.com\/watch?v=5YV0sJLtLt8","strIngredient1":"Water","strIngredient2":"Peas","strIngredient3":"Pork","strIngredient4":"Vegetable Stock Cube","strIngredient5":"Celery","strIngredient6":"Carrots","strIngredient7":"Potatoes","strIngredient8":"Onion","strIngredient9":"Leek","strIngredient10":"Celeriac","strIngredient11":"Sausages","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"2L","strMeasure2":"300g","strMeasure3":"100g ","strMeasure4":"1","strMeasure5":"2","strMeasure6":"2","strMeasure7":"1 large","strMeasure8":"1 small","strMeasure9":"1 small","strMeasure10":"1 cup ","strMeasure11":"1 pound","strMeasure12":" ","strMeasure13":" ","strMeasure14":" ","strMeasure15":" ","strMeasure16":" ","strMeasure17":" ","strMeasure18":" ","strMeasure19":" ","strMeasure20":" ","strSource":"https:\/\/www.thespruceeats.com\/traditional-dutch-split-pea-soup-1129011","dateModified":null},{"idMeal":"52908","strMeal":"Ratatouille","strDrinkAlternate":null,"strCategory":"Vegetarian","strArea":"French","strInstructions":"Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a saut\u00e9 pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don\u2019t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil.","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/wrpwuu1511786491.jpg","strTags":"Vegetables,SideDish","strYoutube":"https:\/\/www.youtube.com\/watch?v=BFdQUgAFtGU","strIngredient1":"Aubergine","strIngredient2":"Courgettes","strIngredient3":"Yellow Pepper","strIngredient4":"Tomato","strIngredient5":"Olive Oil","strIngredient6":"Basil","strIngredient7":"Onion","strIngredient8":"Garlic Clove","strIngredient9":"Red Wine Vinegar","strIngredient10":"Sugar","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"2 large","strMeasure2":"4","strMeasure3":"2","strMeasure4":"4 large","strMeasure5":"5 tbs","strMeasure6":"Bunch","strMeasure7":"1 medium","strMeasure8":"3 finely chopped","strMeasure9":"1 tsp ","strMeasure10":"1 tsp ","strMeasure11":"","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"https:\/\/www.bbcgoodfood.com\/recipes\/2903\/ratatouille","dateModified":null}]});
});
app.get('/selectedmeal', (req, res) => {
  res.json({"meals":[{"idMeal":"52823","strMeal":"Salmon Prawn Risotto","strDrinkAlternate":null,"strCategory":"Seafood","strArea":"Italian","strInstructions":"Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.\r\nAdd the rice and stir to coat all the grains in the butter\r\nAdd the wine and cook gently stirring until it is absorbed\r\nGradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender\r\nSeason with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through\r\nServe scattered with the Parmesan and seasonal vegetables.\r\nGrill the salmon and gently place onto the risotto with the prawns and asparagus","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/9ptx0a1565090843.jpg","strTags":"Fish","strYoutube":"https:\/\/www.youtube.com\/embed\/V2PMvBv52IE","strIngredient1":"butter","strIngredient2":"onion","strIngredient3":"rice","strIngredient4":"white wine","strIngredient5":"vegetable stock","strIngredient6":"lemon","strIngredient7":"King Prawns","strIngredient8":"salmon","strIngredient9":"asparagus","strIngredient10":"black pepper","strIngredient11":"Parmesan","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strIngredient16":"","strIngredient17":"","strIngredient18":"","strIngredient19":"","strIngredient20":"","strMeasure1":"50g\/2oz","strMeasure2":"1 finely chopped ","strMeasure3":"150g","strMeasure4":"125ml ","strMeasure5":"1 litre hot","strMeasure6":"The juice and zest of one","strMeasure7":"240g large","strMeasure8":"150g","strMeasure9":"100g tips blanched briefly in boiling water","strMeasure10":"ground","strMeasure11":"50g shavings","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","strMeasure16":"","strMeasure17":"","strMeasure18":"","strMeasure19":"","strMeasure20":"","strSource":"http:\/\/www.rangemaster.co.uk\/rangemaster-owners\/recipes-ideas-inspiration\/recipes\/mains\/prawn-and-hot-smoked-salmon-risotto-with-asparagus","dateModified":null}]});
});