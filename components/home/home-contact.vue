<template>
<section class="contact overflow-hidden w-full py-24 bg-white relative z-max" id="contact">
    <div class="container">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-28 md:gap-12 sm:gap-10 gap-10">
            <div class="lg:col-start-1 lg:col-end-2">
                <div class="content flex flex-col justify-center w-full h-full">
                    <img 
                    src="/img/dish.png"
                    class="w-dish meal-shape mb-7 h-dish object-contain"
                    :alt="$t(`app.title`)" />
                    
                    <description-style
                    headingStyle="text-heading leading-subtitle text-primary"
                    headContent="أطلب خدمتك من المنيو"
                    descriptionStyle="text-paragraph leading-paragraph text-dark mt-2"
                    description="قم بتعبئة النموذج المقابل وأطلب خدمتك الان من خدمات المنيو المتنوعة" />
                </div>
            </div>

            <div class="lg:col-start-2 lg:col-end-4">
                <div class="form-content p-11 rounded-card bg-white relative z-max">
                    <form>
                        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                            <div class="from-group w-full relative">
                                <label class="text-followUs font-semibold leading-paragraph text-dark mb-2">
                                الاسم
                                </label>
                                
                                <div class="form-input w-full h-help relative overflow-hidden">
                                    <img 
                                    src="/img/user.svg"
                                    class="w-navIcon form-icon h-navIcon absolute right-4"
                                    :alt="$t(`app.title`)"/>

                                    <input 
                                    type="text"
                                    class="form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5 rounded-input"
                                    placeholder="مثل : مازن محمود" />
                                </div>
                            </div>

                            <div class="from-group w-full relative">
                                <label class="text-followUs font-semibold leading-paragraph text-dark mb-2">
                                رقم الجوال
                                </label>
                                
                                <div class="form-input w-full h-help relative overflow-hidden">
                                    <img 
                                    src="/img/call.svg"
                                    class="w-navIcon form-icon h-navIcon absolute right-4"
                                    :alt="$t(`app.title`)"/>

                                    <input 
                                    type="text"
                                    class="form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5 rounded-input"
                                    placeholder="مثل : 056699744" />
                                </div>
                            </div>

                            <div class="from-group w-full relative">
                                <label class="text-followUs font-semibold leading-paragraph text-dark mb-2">
                                القسم
                                </label>
                                
                                <div class="form-input select w-full h-help relative overflow-hidden">
                                    <img 
                                    src="/img/category.svg"
                                    class="w-navIcon form-icon h-navIcon absolute right-4"
                                    :alt="$t(`app.title`)"/>

                                    <select class="select-options z-max form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5 rounded-input">
                                        <option value="إختر القسم">
                                        إختر القسم
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="from-group w-full relative">
                                <label class="text-followUs font-semibold leading-paragraph text-dark mb-2">
                                الخدمات
                                </label>
                                
                                <div class="form-input select w-full h-help relative overflow-hidden">
                                    <img 
                                    src="/img/setting.svg"
                                    class="w-navIcon form-icon h-navIcon absolute right-4"
                                    :alt="$t(`app.title`)"/>

                                    <select class="select-options z-max form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5 rounded-input">
                                        <option value="إختر الخدمات">
                                        إختر الخدمات
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="from-group w-full relative">
                                <label class="text-followUs font-semibold leading-paragraph text-dark mb-2">
                                المدينة
                                </label>
                                
                                <div class="form-input select w-full h-help relative overflow-hidden">
                                    <img 
                                    src="/img/form_location.svg"
                                    class="w-navIcon form-icon h-navIcon absolute right-4"
                                    :alt="$t(`app.title`)"/>

                                    <select class="select-options z-max form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5 rounded-input">
                                        <option value="إختر الخدمات">
                                        إختر الخدمات
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="from-group w-full relative">
                                <label class="text-followUs font-semibold leading-paragraph text-dark mb-2">
                                حالة المشروع
                                </label>
                                
                                <div class="form-input select w-full h-help relative overflow-hidden">
                                    <img 
                                    src="/img/bookmark.svg"
                                    class="w-navIcon form-icon h-navIcon absolute right-4"
                                    :alt="$t(`app.title`)"/>

                                    <select class="select-options z-max form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5 rounded-input">
                                        <option value="إختر حالة المشروع">
                                        إختر حالة المشروع
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="from-group w-full relative">
                                <label class="text-followUs font-semibold leading-paragraph text-dark mb-2">
                                النشاط
                                </label>
                                
                                <div class="form-input select w-full h-help relative overflow-hidden">
                                    <img 
                                    src="/img/ticket.svg"
                                    class="w-navIcon form-icon h-navIcon absolute right-4"
                                    :alt="$t(`app.title`)"/>

                                    <select class="select-options z-max form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5 rounded-input">
                                        <option value="إختر حالة النشاط">
                                        إختر حالة النشاط
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="from-group w-full relative">
                                <label class="text-followUs font-semibold leading-paragraph text-dark mb-2">
                                عدد الفروع
                                </label>
                                
                                <div class="form-input select w-full h-help relative overflow-hidden">
                                    <img 
                                    src="/img/document.svg"
                                    class="w-navIcon form-icon h-navIcon absolute right-4"
                                    :alt="$t(`app.title`)"/>

                                    <select class="select-options z-max form-control text-dark w-full h-full relative px-12 bg-primary bg-opacity-5 rounded-input">
                                        <option value="إختر عدد الفروع">
                                        إختر عدد الفروع
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button class="w-full submit-btn mt-8 overflow-hidden z-max relative flex justify-center rounded-btn items-center text-center bg-primary content-center h-btn">
                            <img 
                            src="/img/secondary_arrow.svg"
                            class="w-navIcon h-navIcon z-max relative object-contain ml-2"
                            :alt="$t(`app.title`)" />

                            <span class="text-white text-paragraph font-normal leading-paragraph">
                            طلب الخدمة
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss">
.contact{
    &::after{
        content: '';
        position: absolute;
        width: 143px;
        height: 143px;
        background: url('/img/conact_mask.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        top: 80px;
        left: 0;
        z-index: -1;
    }

    .form-input{
        &.select{
            &::after{
                content: '';
                position: absolute;
                width: 14px;
                height: 7px;
                background: url('/img/arrow.svg');
                background-size: contain;
                background-repeat: no-repeat;
                left: 17px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }

    .meal-shape{
        animation: spin 10s linear infinite;
        border-radius: 50%;
        box-shadow: 0px 0px 15px rgba($color: #3F0366 , $alpha: .5)
    }

    .form-content{
        box-shadow: 0px 0px 30px rgba($color: #3F0366 , $alpha: .03); 

        .form-icon{
            top: calc(50% - 10px);
            z-index: 9;
        }

        .form-control{
            border: 1px solid transparent;
            transition: all .2s linear;

            &.select-options{
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                color: #B8B8B8;
            }

            &::placeholder{
                color: #B8B8B8;
                font-size: 16px;
                line-height: 30px;
                font-weight: 400;
            }

            &:focus-within,
            &:visited,
            &:focus,
            &:hover{
                border-color: #3F0366;
                outline: none !important;
            }
        }

        .submit-btn{
            &::after,
            &::before{
                content: '';
                position: absolute;
                width: 100%;
                height: 0px;
                background: linear-gradient(-38deg,#3F0366 0,#662851 100%);
                left: 0;
                transition: all .3s linear;
                z-index: -1;
            }

            &::after{
                top: 0;
            }

            &::before{
                bottom: 0;
            }

            &:hover{
                img{
                    animation: rotation 1s linear;
                }

                &::after , &::before{
                    height: 55%;
                }
            }
        }
    }
}

@media (max-width: 999px) {
    .contact{
        .form-content{
            padding-left: 0px !important;
            padding-right: 0px !important;
        }
    }
}
</style>