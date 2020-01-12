<template>
  <div id="app" v-if="true">
    <a href="http://localhost:8080">
      <img alt="Vue logo" src="soup-png-trans.png">
    </a>
    <h1 class="title">Welcome to Global Meals</h1>
    <p class="text-center">
        Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
    </p>
    <p>
      If you like the site, please consider supporting us...
    </p>
    <hr>
    <input type="text" class="search-box" placeholder="Search for a Meal"/>
    <router-link to="/meals" tag="span1">
    <span v-on:click="search_meal" name="span1" class="search-icon"></span>
      </router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
  name: 'app',
  data: function() {
    return{
      selectedMealsList:[],
      showMealsView: false
    }
  },
  methods:{
    search_meal() {
      this.showMealsView = true;
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
h1.title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
html,body{
  background-color:#2d2013;
  color:#fff;
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
  @media only screen and (max-width: 500px) {
    img {
      max-width:320px;
    }
  }
</style>
