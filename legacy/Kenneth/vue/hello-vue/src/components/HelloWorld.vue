<template>
  <div class="hello" v-bind:style="styleObject">
    <img class="pic" :src="car">
    <button  id="color" v-on:click="change" class="btn">Change Background Color</button>
  </div>
</template>

<script>
import lightning from "../assets/kachow.jpeg";

var col = "white"
var changeColor = (event) => {
  let colors = ["red", "blue", "green", "yellow", "purple"];
  col = colors[Math.floor(Math.random() * 6)]
}
export default {
  name: 'HelloWorld',
  data () {
    return {
      car: lightning,
      styleObject: {
        color: col
      }
    }
  },
  methods : {
      change: (event) => {
        console.log("whoo");
        let colors = ["red", "blue", "green", "yellow", "purple"];
        col = colors[Math.floor(Math.random() * 6)]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.hello{
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto, auto;
}
.pic{
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: center;
}
.btn{
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  justify-self: center;
  align-self: center;
}
</style>
