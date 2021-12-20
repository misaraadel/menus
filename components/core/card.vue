<template>
<div class="service-box w-full overflow-hidden relative z-max flex flex-col justify-center items-center content-center text-center py-12 px-9 bg-white rounded-card">
    <img 
    :src="`/img/${boxImage}.svg`"
    class="w-card h-card object-contain"
    :alt="$t(`home.title`)" />

    <h4 class="text-services leading-paragraph my-6 text-dark">
    {{ boxTitle }}
    </h4>

    <p class="text-paragraph font-normal leading-paragraph text-contact">
    {{ boxDesc }}
    </p>
</div>
</template>

<script>
export default {
    props: ['boxImage' , 'boxTitle' , 'boxDesc' ]
}
</script>

<style lang="scss">
.service-box{
    transition: all .4s linear;
    box-shadow: 0px 0px 20px rgba($color: #3F0366, $alpha: .03);

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(-38deg,#3F0366 0,#662851 100%);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        transform: scale(1, 0);
        transform-origin: bottom;
        transition: transform 500ms ease;
    }

    &:hover{
        transform: translateY(-10px);
        box-shadow: 0px 0px 20px rgba($color: #3F0366, $alpha: .1);

        img{
            transform: translateY(-10px);
        }

        &::after{
            transform: scale(1 , 1);
            transform-origin: top !important;
        }

        h4 {
            color: #EBA40C;
        }

        p{
            color: #fff;
        }
    }
}  
</style>