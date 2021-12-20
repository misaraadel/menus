<template>
<div>
  <home-intro />

  <home-about class="pb-24"/>

  <home-services />

  <home-menu />

  <home-help />

  <home-contact />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  layout: `home`,
  scrollToTop: true,

  components: {
    homeIntro: () => import(`@/components/home/home-intro`),
    homeAbout: () => import(`@/components/home/home-about`),
    homeServices: () => import(`@/components/home/home-services`),
    homeMenu : () => import(`@/components/home/home-menu`),
    homeHelp: () => import(`@/components/home/home-help`),
    homeContact: () => import(`@/components/home/home-contact`),
  },

  head() { return { title: this.$t(`home.title`)} }
}
</script>
