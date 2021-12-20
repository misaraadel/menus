<template>
<section class="sub-header pt-28 pb-12 w-full bg-cover bg-no-repeat" style="background-image:url('/img/header.png');">
    <div class="container">
        <div class="w-full flex flex-col justify-center items-center content-center">
            <h4 class="text-heading font-bold text-secondary leading-heading mb-1">
            {{ subHeading }}
            </h4>

            <ul class="flex items-center content-center justify-center">
                <li class="pl-10 relative z-max sub-list">
                    <NuxtLink to="/" class="text-white opacity-70 text-paragraph leading-paragraph font-medium">
                    الرئيسية
                    </NuxtLink>
                </li>

                <li>
                    <span class="text-white text-paragraph leading-paragraph font-medium">
                    {{ subHeading }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props:['subHeading']
}
</script>

<style lang="scss" scoped>
.sub-header{
    .sub-list{
        &::After{
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background: url('/img/left_arrow.svg') center/contain no-repeat;
            top: calc(50% - 10px);
            left: 10px;
            z-index: -1;
        }
    }
}
</style>