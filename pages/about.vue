<template>
<div>
<sub-header subHeading="عن المنيو"/>

<home-about/>

<about-content />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
    layout: `home`,
    scrollToTop: true,

    components: {
        homeAbout: () => import(`@/components/home/home-about`),
        aboutContent: () => import(`@/components/about/about-content`),
    },

    head() { return { title: this.$t(`home.title`)} }
}
</script>