<template>
  <div class="console-wrap">
      <!-- <div class="logo-container">
          <img :src="require('../assets/logos.jpg')">
      </div> -->
      <div class="console">
      <div class="mission-container">
          <div id="mission-content">
              Our mission is to educate students in all aspects and prepare them to be future leaders of our society and make positive contributions to the world.
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.console-wrap{
    position: relative;
    background: url("../assets/bg3.jpg") no-repeat;
    width: 100%;
    background-size: cover;
    padding-top:43%;
    
}
.console{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    padding: 3rem;
    box-sizing: border-box;
}
.mission-container{
    
    margin: 0;
    padding: 2rem;
    float: right;
    background: #fff;
    opacity: 0.5;
    height: auto;
    width: 30%; 
    border-radius: 2rem;
}
#mission-content{
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
}


</style>