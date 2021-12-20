<template>
<div>
<sub-header subHeading="تطوير المطاعم"/>

<services-development />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
    layout: `home`,
    scrollToTop: true,

    components: {
        servicesDevelopment: () => import(`@/components/services/services-development`),
    },

    head() { return { title: this.$t(`home.title`)} }
}
</script>