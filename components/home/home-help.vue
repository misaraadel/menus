<template>
<section class="help relative z-max overflow-hidden w-full py-24" id="help">
    <div class="container">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <div class="lg:col-start-1 lg:col-end-3">
                <div class="image-content">
                    <img 
                    src="/img/help.svg"
                    class="w-full object-right h-header object-contain"
                    :alt="$t(`app.title`)" />
                </div>
            </div>

            <div class="lg:col-start-3 lg:col-end-5">
                <div class="content w-full h-full flex flex-col justify-center">
                    <description-style
                    class="mb-10"
                    headingStyle="text-heading leading-subtitle text-primary"
                    headContent="كيف يساعدك فريق المنيو؟"
                    descriptionStyle="text-paragraph leading-paragraph text-dark mt-2"
                    description="فريق من المختصين المدربين لرفع كفاءة التشغيل" />

                    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        <template v-for="help in helper">
                            <div class="box relative z-max overflow-hidden w-full py-6 bg-white rounded-card flex flex-col justify-center items-center content-center text-center" :key="help.code">
                                <img 
                                :src="`/img/${help.img}.svg`"
                                class="w-help h-help object-contain"
                                :alt="`${help.title}`" />

                                <h4 class="text-primary font-bold text-help leading-paragraph my-1">
                                {{ help.count }}
                                </h4>

                                <p class="text-contact text-paragraph leading-paragraph font-normal">
                                {{ help.title }}
                                </p>

                                <img 
                                :src="`/img/${help.img}.svg`"
                                class="pattern w-full object-right-bottom h-full absolute -right-8 -bottom-8 z-min object-contain"
                                :alt="`${help.title}`" />
                            </div>
                        </template>
                    </div>
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
        helper:[
            {
                code: '1',
                img: 'help_1',
                title: 'زيادة المبيعات',
                count: '300 %'
            },{
                code: '2',
                img: 'help_2',
                title: 'خفض التكاليف',
                count: '20 %'
            },{
                code: '3',
                img: 'help_3',
                title: 'زيادة الأرباح',
                count: '75 %'
            }
        ]
    }
}
}
</script>

<style lang="scss">
.help{
    background-color: rgba($color: #EBA40C , $alpha: .03);

    &::after{
        content: '';
        position: absolute;
        width: 143px;
        height: 143px;
        background: url('/img/help_mask.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        top: 80px;
        right: 0;
        z-index: -1;
    }

    .box{
        transition: all 500ms ease;
        box-shadow: 0px 0px 20px rgba($color: #3F0366 , $alpha: .03);

        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(-38deg,#3F0366 0,#3F0366 100%);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            transform: scale(1, 0);
            transform-origin: bottom;
            transition: transform 500ms ease;
        }

        img{
            transition: all 500ms ease;
            filter: invert(74%) sepia(32%) saturate(4636%) hue-rotate(2deg) brightness(99%) contrast(91%);

            &.pattern{
                opacity: 0;
                visibility: hidden;
                transition: all 500ms ease;
                filter: invert(99%) sepia(0%) saturate(1639%) hue-rotate(343deg) brightness(121%) contrast(100%) !important;
            }
        }

        &:hover{
            transform: translateY(-10px);
            
            img{
                transform: translateY(-10px);

                &.pattern{
                    opacity: .07;
                    visibility: visible;
                    animation: sideClip 1s linear;
                }
            }

            &::before{
                transform: scale(1 , 1);
                transform-origin: top !important;
            }

            h4{
                color: #fff;
            }

            p{
                color: rgba($color: #fff, $alpha: .7);
            }
        }
    }
}
</style>