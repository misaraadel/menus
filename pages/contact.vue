<template>
<div>
<sub-header subHeading="طلب الخدمة"/>

<home-contact />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
    layout: `home`,
    scrollToTop: true,

    components: {
        homeContact: () => import(`@/components/home/home-contact`),
    },

    head() { return { title: this.$t(`home.title`)} }
}
</script>