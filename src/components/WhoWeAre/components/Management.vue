<template>
  <div class="panel">
                <div class="title">{{title}}</div>
                <div class="content">
                    <div class="card" v-for="(person, index) in persons" :key="index">
                        <div class="photo">
                            
                            <img :src="require('@/assets/portrait/'+person.img)">
                        </div>
                        <div class="info">
                            <div class="name">{{person.name}}</div>
                            <div class="position">{{person.position}}</div>
                            <div class="introduction">{{person.introduction}}</div>
                        </div>

                    </div>
                </div>
            </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Management",
            persons: [
                {
                    name: "Alex Yangyong Ma",
                    img:'AlexM.jpeg',
                    introduction: "Mr Alex Yangyong Ma is the founder of our company and has served as the executive chairman of our board of Directors since 2012. Prior to founding the company, Mr Alex Ma was an English instructor and Basketball, kickboxing coach. Mr Alex Ma received his degree in Economics from University of London, Business Management from Dominican University of California and Entrepreneurship Essentials from Harvard Business School.",
                    position: "Founder & Chairman"
                },
                {
                    name: "Alex Yangyong Ma",
                    img:'AlexM.jpeg',
                    introduction: "Mr Alex Yangyong Ma is the founder of our company and has served as the executive chairman of our board of Directors since 2012. Prior to founding the company, Mr Alex Ma was an English instructor and Basketball, kickboxing coach. Mr Alex Ma received his degree in Economics from University of London, Business Management from Dominican University of California and Entrepreneurship Essentials from Harvard Business School.",
                    position: "Founder & Chairman"
                },
                {
                    name: "Alex Yangyong Ma",
                    img:'AlexM.jpeg',
                    introduction: "Mr Alex Yangyong Ma is the founder of our company and has served as the executive chairman of our board of Directors since 2012. Prior to founding the company, Mr Alex Ma was an English instructor and Basketball, kickboxing coach. Mr Alex Ma received his degree in Economics from University of London, Business Management from Dominican University of California and Entrepreneurship Essentials from Harvard Business School.",
                    position: "Founder & Chairman"
                },
                {
                    name: "Alex Yangyong Ma",
                    img:'AlexM.jpeg',
                    introduction: "Mr Alex Yangyong Ma is the founder of our company and has served as the executive chairman of our board of Directors since 2012. Prior to founding the company, Mr Alex Ma was an English instructor and Basketball, kickboxing coach. Mr Alex Ma received his degree in Economics from University of London, Business Management from Dominican University of California and Entrepreneurship Essentials from Harvard Business School.",
                    position: "Founder & Chairman"
                }
            ]
        }
    }
}
</script>

<style>
.panel{
    
    padding: 2rem;
    
    text-align: left;
    box-sizing: border-box;
    
}

.panel .title{
    font-size: 3rem;
    font-weight: bold;

}
.panel .content{
    margin: 2rem 0;
    font-size: 1.5rem;
}

.panel .card{
    width: 100%;
    height: auto;
    border-bottom: solid 0.2rem gray;
    display: flex;
    padding: 2rem 0;

}

.card .photo{
    height: 5rem;
    
}
.card .info{
    padding-left: 1rem;
}
.card .photo img{
    width: 100%;
    height: auto;
    
}
.card .name{
    font-size: 2rem;
    font-weight: bold;
}

.card .position{
    font-size: 1.5rem;
    font-weight: bold;
}

.card .introduction{
    font-size: 1.5rem;
}
</style>