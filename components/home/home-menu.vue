<template>
<div>
    <section class="menu relative z-max w-full py-20 bg-white" id="menu">
        <div class="container">
            <description-style
                class="text-center data-heading"
                headingStyle="text-heading leading-heading"
                headContent="منيو المطاعم"
                descriptionStyle="text-dark mt-2 text-text-paragraph mb-20"
                description="أنواع المطاعم اللي نسويها" />
            
            <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-7">
                <template v-for="meal in menu">
                    <div @click="showModal = true" class="box cursor-pointer flex flex-col justify-center content-center items-center text-center" :key="meal.code">
                        <div class="img-content flex justify-center items-center content-center w-meal h-meal rounded-circle mb-2 relative">
                            <img 
                            src="/img/menu_dish.png" 
                            class="w-full h-full absolute top-0 left-0 rotate-icon object-contain object-center"
                            :alt="`${meal.title}`" />

                            <img 
                            :src="`/img/${meal.img}.svg`" 
                            class="w-card h-card object-contain object-center relative z-max"
                            :alt="`${meal.title}`" />
                        </div>
                        
                        
                        <h4 class="text-meal text-dark font-bold leading-paragraph">
                        {{ meal.title }}
                        </h4>
                    </div>
                </template>
            </div>
        </div>
    </section>

    <transition name="fade" appear>
        <div class="model-overly w-full h-full felx justify-center items-center content-center bg-dark bg-opacity-70 fixed top-0 left-0 z-max" v-if="showModal" @click="showModal = false">
        </div>
    </transition>

    <transition name="slide" appear>
        <div class="modal lg:w-semi-half fixed top-1/2 left-1/2 z-full-max md:w-full mx-auto px-24 py-12 bg-white rounded-btn" v-if="showModal">
            <description-style
                class="text-center border-b border-solid border-contact"
                headingStyle="text-heading text-primary leading-heading"
                headContent="كوفي شوب"
                descriptionStyle="text-contact mt-2 text-text-paragraph mb-12"
                description="كل صور المنيو الخاص بالكوفي شوب" />

            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-12">
                <template v-for="popup in popups">
                    <div class="image-content w-full h-meal rounded-input overflow-hidden" :key="popup.code">
                        <img :src="`/img/${popup.img}.png`" :alt="$t(`app.title`)" class="w-full h-full object-cover" />
                    </div>
                </template>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data(){
        return{
            showModal: false,
            menu:[
                {
                    code: '1',
                    img: 'menu_1',
                    title: 'كوفي شوب'
                },{
                    code: '2',
                    img: 'menu_2',
                    title: 'مطاعم برجر'
                },{
                    code: '3',
                    img: 'menu_3',
                    title: 'إفطار'
                },{
                    code: '4',
                    img: 'menu_4',
                    title: 'فرايد تشيكن'
                },{
                    code: '5',
                    img: 'menu_5',
                    title: 'عصائر فريش'
                },{
                    code: '6',
                    img: 'menu_6',
                    title: 'مطاعم بيتزا'
                },{
                    code: '7',
                    img: 'menu_7',
                    title: 'مطاعم وجبات بحرية'
                },{
                    code: '8',
                    img: 'menu_8',
                    title: 'مطاعم وجبات سريعة'
                }
            ],
            popups:[
                {
                    code: '1',
                    img: 'popup_1'
                }, {
                    code: '2',
                    img: 'popup_2'
                }, {
                    code: '3',
                    img: 'popup_4'
                }, {
                    code: '4',
                    img: 'popup_4'
                }, {
                    code: '5',
                    img: 'popup_5'
                },{
                    code: '6',
                    img: 'popup_6'
                }
            ]
        }
    },
    watch: {
        showModal: function() {
            if(this.showModal){
                document.documentElement.style.overflow = 'hidden'
                return
            }

            document.documentElement.style.overflow = 'auto'
        }
    },
}
</script>

<style lang="scss">
.menu{

    &::after{
        content: '';
        position: absolute;
        width: 143px;
        height: 143px;
        background: url('/img/menu_mask.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        top: 80px;
        left: 0;
        z-index: -1;
    }

    .box{
        transition: all .4s linear;

        &:hover{
            transform: translateY(-10px);

            .rotate-icon{
                animation: spin 4s linear infinite;
            }

            h4{
                color: #EBA40C;
            }
        }
    }
}

.modal{
    height: 80% !important;
    transform: translate(-50% , -50%);
    transition: all .4s linear;
    overflow-y: scroll;
    overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-50%) translateY(100vw);
}
@media (max-width: 800px) {
    .menu{
        .box{
            margin: auto;
        }
    }
}
</style>