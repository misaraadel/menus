<template>
<section class="about-content pt-10 pb-24 overflow-hidden bg-white">
    <div class="container">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1" v-for="(list , i) in servicesList" :key="list.code">
            <div :class="i%2===0?`lg:order-last md:order-first sm:order-first lg:col-start-3 lg:col-end-5` : `lg:order-first md:order-first sm:order-first lg:col-start-1 lg:col-end-3`">
                <img 
                    :src="`/img/${list.img}.png`"
                    class="w-full h-header object-contain lg:my-11 md:my-10 sm:my-20 my-20"
                    :class="i%2===0?`lg:object-left sm:object-center`:`lg:object-right sm:object-center`"
                    :alt="`${list.title}`" />
            </div>
            
            <div :class="i%2===0?`lg:order-first md:order-first sm:order-first lg:col-start-1 lg:col-end-3` : `lg:order-last md:order-first sm:order-first lg:col-start-3 lg:col-end-5`">
                <div class="content w-full h-full sm:mb-7 flex flex-col justify-center relative z-max"
                    :class="i%2===0?`${list.class} right-side`:`${list.class} left-side`">
                    <description-style 
                        headingStyle="text-primary leading-heading"
                        :headContent="`${list.title}`"
                        descriptionStyle="text-dark text-paragraph mt-8 mb-8"
                        :description="`${list.desc}`" />
                        
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

<script>
export default {
data(){
    return{
        servicesList:[
            {
                code: '1',
                img: 'services_1',
                title: 'من الفكرة للتنفيذ',
                desc: 'لدينا عملاء مطاعم يأتون إلينا في مواقع تعد من بين الأفضل في المدينة ، لكن ليس لديهم أي فكرة عن تكلفة مشروعهم أو ما إذا كان هذا السوق مناسبًا لمفهومهم. لدينا أيضًا عملاء أنفقوا مبالغ كبيرة من المال وليس لديهم مفهوم قابل للتطبيق أو مفهوم يمكن تنفيذه',
                class: 'service_1'
            },{
                code: '2',
                img: 'services_2',
                title: 'فهم المطلوب في وقت بسيط',
                desc: 'تمثل هدفنا الرئيسي في مساعدتك على فهم عملية فتح مطعم وكيفية تطوير استراتيجية تلبي توقعاتك. قد يستغرق اجتماعنا الأولي المدة اللازمة لفهم الطلوب لتحقيق مشروعك بكل سهولة وفي اطار زمني محدد',
                class: 'service_2'
            },{
                code: '3',
                img: 'services_3',
                title: 'نوجهك دائما للأفضل',
                desc: 'غالبًا ما لا يكون العملاء في هذه المراحل المبكرة على دراية بالجدول الزمني والتكلفة المتضمنة ومدى تعقيدها بدون مساعدة الخبراء في هذا المسعى. في نهاية اجتماعنا ، إذا قررت أنه من المفيد لتطورك أن تكون معنا في فريقك ، فسنقوم بإعداد اقتراح وإرشادك خطوة بخطوة في كيفية تحقيق حلمك بأسرع ما يمكن. ستتم محاسبتك على وقتنا بأسعارنا العادية ، لكننا نضمن أن وقتنا سيكون مفيدًا جدًا لنجاح برنامجك',
                class: 'service_3'
            },{
                code: '4',
                img:'services_4',
                title: 'نقترح عليك الأنسب',
                desc: 'واذا كان لديك مشروع قائم سنزور مشروعك ونقدم لك الاقتراحات المناسبة لتطوير أدائه الي الأفضل',
                class: 'service_4'
            }
        ]
    }
}
}
</script>

<style lang="scss">
.about-content{
    .content{
       &::after{
        content: '';
        position: absolute;
        width: 108.15px;
        height: 215px;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        top: 10px;
        z-index: -1;
       }

       &.left-side{
        &::after{
            left: -20%;
        }
       }

       &.right-side{
        &::after{
            right: -20%;
        }
       }

       &.service_1{
        &::after{
            background: url('/img/service_mask.svg');
        }
       }

       &.service_2{
        &::after{
            background: url('/img/menu_mask.svg');
        }
       }

       &.service_3{
        &::after{
            background: url('/img/help_mask_contain.svg')
        }
       }

       &.service_4{
        &::after{
            background: url('/img/about_mask.svg');
        }
       }
    }
}
</style>