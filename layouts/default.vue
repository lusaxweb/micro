<template>
  <div
    class="app"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd">
    <nav-bar/>
    <nav-bar-sections />
    <nav-bar-footer />
    <div class="con-app">
      <nuxt/>
    </div>
    <Footer />
    <vue-particles color="#dedede" />
  </div>
</template>

<script>
import navBar from '@/components/navBar'
import navBarSections from '@/components/navBarSections'
import navBarFooter from '@/components/navBarFooter'
import Footer from '@/components/Footer'
import { mapState, mapActions } from 'vuex'
export default {
  components:{
    navBar,
    navBarSections,
    navBarFooter,
    Footer
  },
  data: () => ({
    touchStart:{
      x: 0,
      y: 0
    }
  }),
  computed: {
    ...mapState([
      'section'
    ])
  },
  methods:{
    ...mapActions([
      'changeSection'
    ]),
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      if (e.srcElement.closest('.content')) return
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      let sectionNew = this.$store.state.section

      console.log('dx', dx)
      console.log('dy', dy)

      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 100) {
        if (dy > 0) {
          sectionNew--
          if(sectionNew < 0) return
          this.changeSection(sectionNew)
        } else {
          sectionNew++
          if(sectionNew > 5) return
          this.changeSection(sectionNew)
        }
      }
    }
  }
}
</script>


<style lang="stylus">
@require '../styles/main.styl'

.con-app
  z-index 200
  position relative

#particles-js
  position fixed
  top 0px
  height 100vh
  width 20%
  z-index 100
  &:after
    content ''
    right 0px
    width 300px
    height 100vh
    position absolute
    top 0px
    // transform translate(50%)
    // background rgb(100,0,0)
    background-image: linear-gradient(-90deg, colorx(bg) 0%, transparent 100%);
    z-index 150


html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after
  box-sizing: border-box
  margin: 0
  padding: 0
  list-style: none
  color colorx(text-color)

*::-webkit-scrollbar
  width: 3px;
  height: 3px;

*::-webkit-scrollbar-thumb
  background: colorx(primary, .5)
  border-radius: 5px;

*::-webkit-scrollbar-thumb:hover
  background colorx(primary, 1)

body
  overflow hidden
  background colorx(bg)
  width 100%
.app
  // background colorx(bg)
  width 100%

.con-app
  // margin-right 50px
  left 0px
  overflow hidden
  width calc(100% - 50px)
button
  border 0px
  outline none
  cursor pointer

@media only screen and (max-width: 768px)
  #particles-js
    display none
  .con-app
    width calc(100% - 20px)
@media only screen and (orientation: landscape) and (max-width: 850px)
  .con-app
    width calc(100% - 29px)
</style>
