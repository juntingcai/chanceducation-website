<template>
 <div class="activities-wrap">
     <div class="imgs-wrap">
         <img v-for="(imgPath, index) in images" :key="index" :src="imgPath" alt="">
     </div>
 </div>
</template>

<script>
export default {
    data(){
        return {
            images: {},
        }
    },
    mounted() {
        this.importAll(require.context('../../../assets/activities', true, /\.jpg$/));
    },

    methods: {
        importAll(r) {
            var imgs = {};
            console.log(r);
            r.keys().forEach(key => (imgs[key] = r(key)))
            this.images = imgs
        },
    },
}
</script>

<style>
.activities{
    padding:0;
}
.imgs-wrap{
    width: 100%;
    height: auto;
    padding: 2rem;
    box-sizing: border-box;
}
.imgs-wrap img{
    width: 100%;
    height: auto;
}
</style>