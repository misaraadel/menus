<template>
<section class="about-us overflow-hidden pt-24 bg-white relative z-max">
    <div class="container">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div class="lg:col-start-1 lg:col-end-3">
                <div class="image-content">
                    <img 
                    src="/img/about_us.svg"
                    class="w-full h-header object-contain object-right"
                    :alt="$t(`app.title`)" />
                </div>
            </div>
            
            <div class="lg:col-start-3 md:col-end-5">
                <div class="content w-full h-full flex flex-col justify-center">
                    <description-style 
                        headingStyle="text-primary leading-heading"
                        headContent="المنيو.كوم"
                        descriptionStyle="text-dark text-paragraph mt-8 mb-8"
                        description="فريق متخصص في إدارة وتشغيل مطاعم الوجبات السريعة والكوفي شوب، من 2007 نعمل لمساعدة رواد الأعمال والمستثمرين عبر توفير خدمات التأسيس والتشغيل وتطوير  مطاعم الوجبات السريعة" />
                        
                    <p class="text-dark text-paragraph mb-10">
                        نصحبك في كل خطوة من البداية حتى النجاح
                    </p>

                    <call-to-action 
                    btnClass="primary"
                    img="secondary"
                    textColor="text-secondary" />
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss">
.about-us{
    &::after{
        content: '';
        position: absolute;
        width: 143px;
        height: 143px;
        background: url('/img/about_mask.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        top: -20px;
        left: -20px;
        z-index: -1;
    }   
}
</style>