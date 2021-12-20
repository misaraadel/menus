import Vue from 'vue'
import { mapGetters } from 'vuex'
import callToAction from '@/components/core/call-to-action'
import cayanCopyrights from '@/components/core/cayan-copyrights'
import companyCopyrights from '@/components/core/company-copyrights'
import Card from '@/components/core/card'
import descriptionStyle from '@/components/core/description-style'
import footerData from '@/components/core/footer-data'
import homeCopyrights from '@/components/core/home-copyrights'
import logo from '@/components/core/logo'
import socialMedia from '@/components/core/social-media'
import subHeader from '@/components/core/sub-header'
import vError from '@/components/v-error'
import Cookies from "js-cookie";

const Mix = {
  install(Vue, options) {
    Vue.component('call-to-action', callToAction)
    Vue.component('cayan-copyrights', cayanCopyrights)
    Vue.component('company-copyrights', companyCopyrights)
    Vue.component('card', Card)
    Vue.component('description-style', descriptionStyle)
    Vue.component('footer-data', footerData)
    Vue.component('home-copyrights', homeCopyrights)
    Vue.component('logo', logo)
    Vue.component('social-media', socialMedia)
    Vue.component('sub-header', subHeader)
    Vue.component('v-error', vError)

    Vue.mixin({
      data() {
        return {
          number: '920022480'
        }
      },

      computed: {
        ...mapGetters({ isloading: 'isloading', errors: 'errors' }),

        locale() { return this.$i18n.locale },

        isrtl() { return this.$t(`app.dir`) === 'rtl' }
      },

      methods: {
        replaceQuery() {
          const query = Object.assign({}, this.$route.query)
          query.nan = undefined
          return this.$router.replace({ query }).catch(() => {})
        },

        register() {
          const register = new CustomEvent('event:register')
          document.dispatchEvent(register)

          Cookies.remove(`_source`)
        },

        callus(number, sub) {
          let event = 'event:call'

          if (sub) event = `${event}:${sub}`

          const call = new CustomEvent(event)
          document.dispatchEvent(call)

          window.open(`tel:${number}`)
        },

        whatsapp(number, sub) {
          let event = 'event:whatsapp'

          if (sub) event = `${event}:${sub}`

          const whatsapp = new CustomEvent(event)
          document.dispatchEvent(whatsapp)

          window.open(`https://wa.me/${number}`)
        },

        mapbranch(url) {
          const map = new CustomEvent('event:map:branch')
          document.dispatchEvent(map)

          window.open(url)
        },

        scrollTo(element, offset = 0) {
          const to = document.querySelectorAll(element)[0]
          if (to) {
            const y = to.getBoundingClientRect().top + window.scrollY
            window.scroll({ top: y - offset, behavior: 'smooth' })
          }
        }
      }
    })
  }
}

Vue.use(Mix)
