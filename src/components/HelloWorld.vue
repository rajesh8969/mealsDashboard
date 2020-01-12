<template>
  <div class="hello">
    
    <h5>Latest Meals</h5>
    <ul class="latest-items">
      <li class="" v-for="(item) in mealsList" v-bind:key="item"><a v-bind:href="item.strSource" target="_blank"><img class="" v-bind:src="item.strMealThumb" target="_blank" rel="noopener"></a></li>
    </ul>
    <h5>Popular Ingredients</h5>
    <ul class="latest-items">
      <li v-for="(item) in ingredientsList" v-bind:key="item"><a v-bind:href="item.strSource" target="_blank"><img class="" v-bind:src="item.strMealThumb" target="_blank" rel="noopener"></a></li>
    </ul>
    <h5>Random Meals</h5>
    <ul class="latest-items">
      <li v-for="(item) in randomMealsList" v-bind:key="item"><a v-bind:href="item.strIngredient1" target="_blank"><img class="" v-bind:src="item.strMealThumb" target="_blank" rel="noopener"></a></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return{
    mealsList:[],
    ingredientsList: [],
    randomMealsList:[]
    }
  },
  mounted(){
    axios.get('http://localhost:8001/mealslist').then((response) => {
      this.mealsList = response.data.meals;
    });
    axios.get('http://localhost:8001/randommealslist').then((response) => {
      this.ingredientsList = response.data.meals;
    });
    axios.get('http://localhost:8001/popularingredients').then((response) => {
      this.randomMealsList = response.data.meals;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.meal1{
  width:100px;
}
.latest-items li {
  margin-top:15px;
}
.latest-items li img {
  width:150px;
  height:150px;
  border:4px solid #fff;
  display:block;
}
.search-box{
  border-radius:5px;
  height:45px;
  width:250px;
  padding-left:8px;  
}
.search-icon{
  width:20px;
  height:20px;
  position:relative;
  left:-34px;
  top:3px;
  background-image:url('search-icon.png');
  background-size:contain;
  display:inline-block;
  cursor:pointer;
}
.chicken{
  background-image:url('soup.jpg');
  background-size:contain;
}
.spaghetti{
  background-image:url('spaghetti.jpg');
  background-size:contain;
}
.corba{
  background-image:url('corba.jpg');
  background-size:contain;
}
.bitter-balls{
  background-image:url('bitter-balls.jpg');
  background-size:contain;
}
hr{
  width: 80%;
    border-top: 1px solid #fff;
}
</style>
