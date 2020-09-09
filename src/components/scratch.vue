<div class="card" v-for="(person, index) in persons" :key="index">
    <div class="photo">
        
        <img :src="require('@/assets/portrait/'+person.img)">
    </div>
    <div class="info">
        <div class="name">{{person.name}}</div>
        <div class="postion">{{person.positon}}</div>
        <div class="introduction">{{person.introduction}}</div>
    </div>

</div>