<template>
    <div class="main-wrap">
        <div style="height:100%;" class="side-bar">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#1426fd"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">Overview</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">Oversea Studying</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">Homestay Program</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">Test Preparation</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">College Application</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">Summer & Winter Camp</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-menu"></i>
                <span slot="title">Online Education</span>
            </el-menu-item>
            <el-menu-item index="8">
                <i class="el-icon-menu"></i>
                <span slot="title">Ivy Leage School Camp</span>
            </el-menu-item>
            <el-menu-item index="8">
                <i class="el-icon-menu"></i>
                <span slot="title">FLAG Internship Oppotunity</span>
            </el-menu-item>
            </el-menu>
        </div>
        <div class="panel-wrap">
            <div class="panel">
                <div class="title">{{title}}</div>
                <div class="content">{{content}}</div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Overview",
            content: "Chance education provides a comprehensive range of educational services to the needs of students at all ages. From summer, winter camps to help students select American schools and  homestay programs, we help them prepare admission tests and college applications to facilitate them get accepted by their dream schools with scholarships. Chance Education offers a well-round educational programs to ensure the success of our students."
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.main-wrap{
    
    width: 100%;
    height: 70vh;
    min-height: 40rem;
}

.side-bar{
    float:left;
    width: 25%;
    height: 100%;
    min-width: 20rem;
    height: auto;
    background: #1426fd
}
.side-bar .el-menu{
    border: none;
}
.side-bar .el-menu .el-menu-item{
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    box-sizing: border-box;
}

.panel-wrap{
    float: left;
    width: 75%;
    min-width: 60rem;
    height: 100%;
    background: url("../assets/wwd.jpg");
    background-repeat:no-repeat;
    background-size: 100% auto;
    padding: 2rem;
    box-sizing: border-box;
    
}
.panel{

    padding: 2rem;
    border-radius: 1rem;
    color:#fff;
    text-align: left;
    box-sizing: border-box;
    background: black;
    opacity: 0.7;
}

.panel .title{
    font-size: 3rem;
    font-weight: bold;

}
.panel .content{
    margin: 2rem 0;
    font-size: 1.5rem;
}
</style>