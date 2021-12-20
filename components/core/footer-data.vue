<template>
<footer class="w-full pt-14 pb-2 bg-no-repeat">
  <div class="container py-4">
    <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-36 md:gap-12 sm:gap-9 gap-9">
      <div class="content">
        <logo />

        <p class="mt-9 text-justify text-copyrights font-normal leading-footer text-white">
          بدات خدمات المنيو.كوم في عام ٢٠٠٧ وهدفنا هو تأسيس وتطوير مطاعم الوجبات السريعة من البداية الي النجاح، من خلال فريق متخصص في إدارة وتشغيل مطاعم الوجبات السريعة والكوفي شوب
        </p>
      </div>

      <div class="content ">
        <h4 class="font-bold mb-9 text-secondary text-services leading-footer">
        أقسام المنيو
        </h4>

        <div class="flex data-link items-start content-start">
          <ul>
            <li>
              <nuxt-link to="/" class="text-copyrights font-normal text-white leading-head">
              الرئيسية
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/about" class="text-copyrights font-normal text-white leading-head">
              عن المينيو
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/established-resturant" class="text-copyrights font-normal text-white leading-head">
              الخدمات
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/menu" class="text-copyrights font-normal text-white leading-head">
              منيو المطاعم
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/contact" class="text-copyrights font-normal text-white leading-head">
              كيف يساعدك فريق المنيو ؟
              </nuxt-link>
            </li>
          </ul>

          <ul>
            <li class="mb-1">
              <nuxt-link to="/contact" class="text-copyrights font-normal text-white leading-head">
              أطلب خدمتك
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="content">
        <h4 class="font-bold mb-9 text-secondary text-services leading-footer">
        تواصل معنا
        </h4>

        <ul>
          <li class="pb-5 border-b border-solid border-white border-opacity-10">
            <a href="#" class="flex items-center content-center">
              <img 
              src="/img/footer_location.svg" 
              class="w-navIcon h-navIcon object-contain ml-4"
              :alt="$t(`app.title`)" />

              <span class="text-copyrights font-bold leading-head text-white">
              المملكة العربية السعودية
              </span>
            </a>
          </li>

          <li class="py-5 border-b border-solid border-white border-opacity-10">
            <a href="#" class="flex items-center content-center">
              <img 
              src="/img/message.svg" 
              class="w-navIcon h-navIcon object-contain ml-4"
              :alt="$t(`app.title`)" />

              <span class="text-copyrights font-bold leading-head text-white">
              info@el-menu.com
              </span>
            </a>
          </li>

          <li class="pt-5">
            <a @click="callus()" class="flex cursor-pointer items-center content-center">
              <img 
              src="/img/footer_call.svg" 
              class="w-navIcon h-navIcon object-contain ml-4"
              :alt="$t(`app.title`)" />

              <span class="text-copyrights font-bold leading-head text-white">
              00966546666174
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="heading-content w-full mt-9 mb-5 relative z-max">
      <h4 class="text-copyrights bg-primary px-12 text-secondary font-normal leading-paragraph relative w-fit-content m-auto">
        تابعنا على
      </h4>
    </div>
    
    <social-media class="w-full justify-center" />
  </div>
</footer>
</template>

<style lang="scss">
footer{
  .data-link{
    ul {
      li{
        margin-bottom: 10px;

        &:last-child{
          margin: 0px;
        }
      }
    }  
  }

  .heading-content{
    &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: rgba($color: #fff, $alpha: .10);
      top: 50%;
      left: 0px;
      transform: translateY(-50%);
      z-index: -1;
    }
  }
}
</style>


