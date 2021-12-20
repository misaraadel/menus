<template>
<div class="menu-data">
<sub-header subHeading="منيو المطاعم"/>

<home-menu />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
    layout: `home`,
    scrollToTop: true,

    components: {
        homeMenu: () => import(`@/components/home/home-menu`),
    },

    head() { return { title: this.$t(`home.title`)} }
}
</script>

<style lang="scss">
.menu-data{
    .data-heading{
        display: none;
    }
}
</style>