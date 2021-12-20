<template>
<div>
<sub-header subHeading="خدمات المنيو"/>

<home-services />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
    layout: `home`,
    scrollToTop: true,

    components: {
        homeServices: () => import(`@/components/home/home-services`),
    },

    head() { return { title: this.$t(`home.title`)} }
}
</script>