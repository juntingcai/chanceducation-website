<template>
  <div id="app">
    <Brand/>
    <div class="navi">
      <el-menu
        :default-active="active"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#0f15c7"
        text-color="#fff"
        active-text-color="#fff"
        >
        <el-menu-item index="Home">Home</el-menu-item>
        <el-menu-item index="WhoWeAre" >Who We Are</el-menu-item>
        <el-submenu index="WhatWeDo">
          <template slot="title">What We Do</template>
          <el-menu-item index="3-1">Overview</el-menu-item>
          <el-menu-item index="3-2">Oversea Study Consulting</el-menu-item>
          <el-menu-item index="3-3">Homestay Program</el-menu-item>
          <el-menu-item index="3-4">Test Preparation</el-menu-item>
          <el-menu-item index="3-5">College Application</el-menu-item>
          <el-menu-item index="3-6">Summer & Winter Camps</el-menu-item>
          <el-menu-item index="3-7">Online Education</el-menu-item>
          <el-menu-item index="3-8">Ivy Leage School Camps</el-menu-item>
          <el-menu-item index="3-9">Internship Oppotunity</el-menu-item>
        </el-submenu>
        
        <el-menu-item index="ContactUs" >Contact Us</el-menu-item>
      </el-menu>

      </div>
    <div :is="this.active"></div>
    
  </div>
</template>

<script>
import Brand from './components/Brand.vue'
import Home from './components/Home.vue'
import WhatWeDo from './components/WhatWeDo.vue'
import WhoWeAre from './components/WhoWeAre/WhoWeAre.vue'

export default {
  name: 'App',
  components: {
    Brand,
    Home,
    WhatWeDo,
    WhoWeAre,
  },
  data () {
    return {
      active: 'Home',
      Home: 'Home',
      WhatWeDo: 'WhatWeDo',
      WhoWeAre: 'WhoWeAre',
    };
  },
  methods: {
      
      handleSelect(key, keyPath) {
        var navi = keyPath[0];
        var subNavi = (keyPath.length > 1)? keyPath[1] : '';
        this.active = navi;
        console.log(subNavi);
        //this.$props('navi', subNavi);
         
      }
  },

  

}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 80rem;
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;

}
.navi{
  width: 100%;
  height: 8%;
  min-height: 4rem;
  font-size: 1.2rem !important;
}

.navi .el-submenu{
    height: 100%;
}
.navi .el-menu--horizontal{
    border: none;
    height: 100%;
}
.navi .el-menu-item, .navi .el-submenu .el-submenu__title{
    font-size: inherit;
    font-weight: bold;
    height: 100%;
    width: 12%;
    border-bottom: 0.4rem solid #0F15C7;
}

.navi .el-menu--horizontal>.el-menu-item.is-active, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom: 0.4rem solid #fff;
}
.el-menu--popup .el-menu-item{
    height: 3rem !important;
    font-size: 1rem;
    line-height: 3rem !important;
    padding: 0 1.5rem !important;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
}
.el-menu--horizontal{
  border: none;
}
</style>
