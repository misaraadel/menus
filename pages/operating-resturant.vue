<template>
<div>
<sub-header subHeading="تشغيل المطاعم"/>

<services-operating />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
    layout: `home`,
    scrollToTop: true,

    components: {
        servicesOperating: () => import(`@/components/services/services-operating`),
    },

    head() { return { title: this.$t(`home.title`)} }
}
</script>