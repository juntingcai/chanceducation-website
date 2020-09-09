<template>
    <div class="main-wrap">
        <div class="side-bar">
            <el-menu
                :default-active="active"
                class="el-menu-vertical-demo"
                @select="handleSelect"
                background-color="#1426fd"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="Overview">
                    <i class="el-icon-s-flag"></i>
                    <span slot="title">Overview</span>
                </el-menu-item>
                <el-menu-item index="FoundersWord">
                    <i class="el-icon-s-comment"></i>
                    <span slot="title">Founder's Word</span>
                </el-menu-item>
                <el-menu-item index="Management">
                    <i class="el-icon-user-solid"></i>
                    <span slot="title">Management</span>
                </el-menu-item>
                <el-menu-item index="Management">
                    <i class="el-icon-user-solid"></i>
                    <span slot="title">Activities Pictures</span>
                </el-menu-item>
                <el-menu-item index="Management">
                    <i class="el-icon-user-solid"></i>
                    <span slot="title">Students Achivments</span>
                </el-menu-item>
            
            </el-menu>
        </div>
        <div class="panel-wrap" :is="panelView"></div>   
    </div>
</template>

<script>
import Management from './components/Management.vue';
import FoundersWord from './components/FoundersWord.vue';
import Overview from './components/Overview.vue';
export default {
    components:{
        Management,
        FoundersWord,
        Overview,
    },
    data(){
        return {
            active: 'Overview',
            panelView: 'Overview',
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            this.active = key;
            console.log(key, keyPath);
            this.panelView = key;
            
            
        }
    }
    
}
</script>

<style scoped>

.main-wrap{
    
    width: 100%;
    min-height: 40rem;
    position: relative;
}

.side-bar{
    padding: 3rem 0;
    position: absolute;
    top:0;
    left:0;
    width: 25%;

    height: 100%;
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
    height: 4rem;
    font-size: 1.2rem;
    font-weight: bold;
}

.panel-wrap{

    margin-left: 25%;
    width: 75%;
    height: 100%;
    
}

.el-menu-item i{
    color: #fff;
}
</style>