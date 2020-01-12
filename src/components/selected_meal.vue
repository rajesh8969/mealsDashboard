<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div v-for="item in selectedMealsList" v-bind:key="item" class="row">
          <div class="col-sm-6">
            <img class="meal-img" v-bind:src="item.strMealThumb"/>
            <p class="dish-name">{{item.strMeal}}</p>
          </div>
          <div class="col-sm-6">
            <iframe width="80%" height="434"
              v-bind:src="item.strYoutube"></iframe>
        </div>
        </div>
    </div>
    <div class="col-sm-12 mar">
      <p>{{this.selectedMealsList[0].strInstructions}}</p>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'selected_meal',
  props: {
    msg: String
  },
  data: function() {
    return{
    selectedMealsList:[],
    ingredients:[]
    }
  },
  created(){
    axios.get('http://localhost:8001/selectedmeal').then((response) => {
      this.selectedMealsList = response.data.meals;
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
.meal-img {
  width:80%;
  height:434px;
}
.mar {
  margin-top:20px;
}
.dish-name {
  font-size: 20px;
  margin-top: 10px;
}
</style>
