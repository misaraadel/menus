<template>
<section class="services py-20 relative z-max" id="services">
    <div class="container">
        <description-style 
        class="text-center lg:w-semi-half md:w-full sm:w-full mx-auto"
        headingStyle="text-primary leading-heading"
        headContent="الخدمات"
        descriptionStyle="text-dark mt-2 text-text-paragraph mb-20"
        description="تعاني معظم مشاريع المطاعم في البداية من القرارات الخاطئة وغياب الرؤية ، هنا يأتي دورنا .نقدم لك جلسة مجانية لتحليل أعمالك والوصول إلى رؤية  متكاملة قبل البدء في العمل سيحاول مستشارو المطاعم توجيهك في الاتجاه الصحيح حول كيفية المضي قدمًا في مشروعك" />

        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <template v-for="service in services">
                <nuxtLink :to="`/${service.page}`" class="p-0" :key="service.img">
                    <card 
                        :boxImage="`${service.img}`"
                        :boxTitle="`${service.title}`"
                        :boxDesc="`${service.desc}`" />
                </nuxtLink>
            </template>
        </div>
    </div>
</section>
</template>

<script>
export default {
data(){
    return{
        services:[
            {
                page: 'established-resturant',
                img: 'service_1',
                title: 'تأسيس المطاعم',
                desc: 'نساعدك في تأسيس مطعمك او الكوفي شوب الخاص بك بشكل احترافي، من الفكرة وحتى الافتتاح حتي تتمكن من تأسيس مشروعك خلال إطار زمني محدد وتجنب الكثير من المخاطر.'
            },{
                page: 'development-resturant',
                img: 'service_2',
                title: 'تطوير المطاعم',
                desc: 'نساعدك في إدارة مطعمك بشكل احترافي من خلال المتابعة المستمرة للفروع والاشراف الكامل على جميع عمليات التشغيل داخل المطعم، بالاضافة لوضع الخطة المناسبة لتطوير المشروع وفريق العمل'
            },{
                page: 'operating-resturant',
                img: 'service_3',
                title: 'تشغيل المطاعم',
                desc: 'اذا كنت تواجه مشكلة في المبيعات او الأرباح فقد يكون مطعمك بحاجة الى تطوير من اجل تحقيق الاهداف التي تخطط لها. فريق المنيو جاهز لمساعدتك في مواجهة التحديات التي يواجهها مطعمك .'
            },
        ]
    }
}
}
</script>

<style lang="scss">
.services{
    background-color: rgba($color: #3F0366 , $alpha: .02);

    &::after{
        content: '';
        position: absolute;
        width: 143px;
        height: 143px;
        background: url('/img/service_mask.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        top: 80px;
        right: 0;
        z-index: -1;
    }
}
</style>