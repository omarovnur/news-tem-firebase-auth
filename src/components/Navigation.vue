<template>
  <div class="hello">
    
    <nav>
    <ul class="navigation">
      
      <li><router-link :to="{name: 'Home'}">{{home}}</router-link></li>
      <li><router-link :to="{name: 'Blog'}">{{blog}}</router-link></li>
      <li><router-link :to="{name: 'About'}">{{about}}</router-link></li>
      <li><router-link :to="{name: 'Contact'}">{{contact}}</router-link></li>
    </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'my-nav',
  data(){
    return{
      home: 'Home',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul, li{
  list-style: none;
}
ul{
  padding-left: 0px;
}
li{
  width: 25%;
}
a {
  
  text-decoration: none;
}
.navigation{
  display: flex;
  background-color: darkgray;
  border-radius: 5px;
  justify-content: space-around;
  flex-flow: row wrap;
}
.navigation a{
  text-align: center;
  display: block;
  color: white;
  padding: 1em;
  font-family:'ABeeZee';
  font-size:20px;
}
.navigation a:hover,
.navigation a:active{
  background-color:dimgray;
  border-radius: 5px;
  color: lightgreen;
}

@media screen and (max-width: 500px) {

    .navigation{
      flex-flow: column wrap;
      padding: 0;
      border-radius: 3px;
    }
    .navigation a{
      font-size: inherit;
      text-align: center;
      border-top: 2px solid rgba(255,255,255,.2);
        border-bottom: 2px solid rgba(0,0,0,.1);
    }
    li{
      width: 100%;
    }
}
</style>
