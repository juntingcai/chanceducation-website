<template>
    <div class="brand">
        
        <span class="brand-text">
            <div id="brand-text-en">
                Chance Education
            </div>
            <div id="brand-text-cn">
                成思文化
            </div>
        </span>
        <!-- <span class="divider"/>  -->
        <!-- <span class="brand-text-cn">成思文化</span> -->
        <span class="logo-container">
          <img :src="require('../assets/logos.jpg')">
        </span>
    </div>
    

</template>

<script>
export default {

}
</script>

<style scoped>
.brand{
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    text-align: left;
    color: #1426fd
}
.brand-text{
    margin-left: 1rem;
    width: 50%;
    
}
#brand-text-en{
    margin-left: 1rem;
    height: 50%;
    font-size: 3.8rem;
    font-weight: 900;
    line-height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
#brand-text-cn{
    
    padding-right: 3rem;
    height: 50%;
    width: auto;
    font-size: 2.2rem;
    font-weight: 800;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    letter-spacing: 0.4rem;
    
}  
.divider{
    
    margin: 3rem 0 2.5rem 1rem;

    border-left: solid 0.2rem #1426fd;
}
.logo-container{
    width: 42%;
    padding: 0.7rem;
    box-sizing: border-box;
    

}
.logo-container img{
    width: 100%;
}
</style>