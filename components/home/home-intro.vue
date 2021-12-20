<template>
<header class="pt-52 pb-14 w-full bg-cover bg-no-repeat" style="background-image:url('/img/header.png');">
    <div class="container py-4">
        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-72 md:gap-12 sm:gap-10 gap-10">
            <div class="w-full h-full flex flex-col justify-center">
                <description-style
                headContent="تشغيل المطاعم"
                headingStyle="text-secondary leading-heading"
                description="سنناقش ونقدم اقتراحات حول مشروعك الجديد وستكون استشارة مجانية لمدة نصف ساعة"
                descriptionStyle="text-white text-desc mt-7 mb-10" />
                
                <call-to-action 
                class="mb-28"
                btnClass="secondary"
                img="primary"
                textColor="text-primary" />
                
                <h4 class="text-followUs w-fit-content heading text-secondary font-semibold mb-5 relative z-max">
                تابعنا على
                </h4>

                <social-media />
            </div>
            
            <img 
            class="w-full h-header object-left object-contain"
            src="/img/intro.svg"
            :alt="$t(`app.title`)" />
        </div>
    </div>
</header>
</template>

<style lang="scss">
header{
    .heading{
        &::after{
            content: '';
            position: absolute;
            width: 128px;
            height: 1px;
            background-color: rgba($color: #EBA40C, $alpha: .2);
            right: 78px;
            top: calc(50% - .5px);
        }
    }
}
</style>