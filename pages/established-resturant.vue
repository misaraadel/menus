<template>
<div>
<sub-header subHeading="تأسيس المطاعم"/>

<services-established />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
    layout: `home`,
    scrollToTop: true,

    components: {
        servicesEstablished: () => import(`@/components/services/services-established`),
    },

    head() { return { title: this.$t(`home.title`)} }
}
</script>