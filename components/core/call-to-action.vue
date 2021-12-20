<template>
<nuxtLink to="/contact" :class="`${btnClass} custom-btn z-max relative flex justify-center rounded-btn items-center content-center w-btn h-btn`">
  <img 
  :src="`/img/${img}_arrow.svg`"
  class="w-navIcon h-navIcon z-max relative object-contain ml-2"
  :alt="$t(`app.title`)" />

  <span :class="`${textColor} text-paragraph font-normal leading-paragraph`">
  أطلب الخدمة
  </span>
</nuxtLink>
</template>

<script>
export default {
  props:[ 'btnClass' , 'img' , 'textColor']
}
</script>

<style lang="scss">
.custom-btn{
  &::after , &::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 32px;
  }

  &::after{
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 500ms ease;
  }

  &::before{
    width: 45px;
    height: 45px;
    z-index: 0;
    opacity: 0;
    visibility: hidden;
    animation: pulsecust 1.8s linear infinite;
    transition: all 600ms ease;
  }

  &.primary{
    &::after, 
    &::before{
      background-color: #3F0366;
    }

    &:hover{
      span{
        color: #3F0366;
      }
    }
  }

  &.secondary{
    &::after,
    &::before{
      background-color: #EBA40C;
    }

    &:hover{
      span{
        color: #fff;
      }
    }
  }

  img{
    transition: transform .4s ease;
    transition-delay: .2s;
  }

  span{
    transition: all .4s ease;
  }

  &:hover{
    img{
      transform: translateX(10px);
    }
    
    &::after{
      width: 45px;
    }

    &::before{
      opacity: 1;
      visibility: visible;
    }
  } 
}
</style>