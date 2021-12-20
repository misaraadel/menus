<template>
<ul class="social-media flex content-center items-center">
    <template v-for="social in socialMedia">
        <li class="ml-2" :key="social.img">
            <a :href="`${social.link}`" target="_blank" class="w-social bg-white bg-opacity-10 social-icon overflow-hidden h-social rounded-circle flex justify-center items-center content-center">
                <img 
                :src="`/img/${social.img}.svg`"
                class="w-navIcon h-navIcon object-contain"
                :alt="`${social.alt}`" />
            </a>
        </li>
    </template>
</ul>
</template>

<script>
export default {
data(){
    return{
        socialMedia:[ 
            {
                img: 'facebook',
                link: 'www.facebook.com',
                alt: 'صفحة المنيو علي فيس بوك'
            },{
                img: 'twitter',
                link: 'www.twitter.com',
                alt: 'صفحة المنيو علي تويتر'
            },{
                img: 'instagram',
                link: 'www.instagram.com',
                alt: 'صفحة المنيو علي انستجرام'
            },{
                img: 'youtube',
                link: 'www.youtube.com',
                alt: 'قناة المنيو علي اليوتيوب'
            },{
                img: 'snap_chat',
                link: 'www.snapshat.com',
                alt: 'ًصفحه المنيو علي سناب شات'
            }
        ]
    }
}
}
</script>

<style lang="scss">
.social-media{
    .social-icon{
        transition: all 100ms linear;

        img{
            filter: invert(99%) sepia(100%) saturate(0%) hue-rotate(253deg) brightness(102%) contrast(102%);
            opacity: .3;
        }

        &:hover{
            background-color: #EBA40C;

            img{
                filter: invert(9%) sepia(63%) saturate(3954%) hue-rotate(269deg) brightness(105%) contrast(114%);
                opacity: 1;
                animation: toRightFromLeft .4s linear;
            }
        }
    }
}
</style>