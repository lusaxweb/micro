<template>
  <div
    id="section-1"
    class="section--1 sections">

    <div class="con-img">
      <img
        src="~/static/values.png"
        alt="micro-x">
    </div>

    <div class="con-text">
      <h2>
        {{ $t('section1.title') }}
      </h2>
      <p>
        {{ $t('section1.text') }}
      </p>

      <button>{{ $t('section1.btn') }}</button>
    </div>

  </div>
</template>
<script>
export default {
  data: () => ({
    activeItem: 0,
    slideItems: [
      {
        title: 'hola mundo',
        text: 'Nuxt.js is really easy to get started with. A simple project only needs the nuxt dependency.'
      },
      {
        title: 'hola mundo soy el slide 2',
        text: 'Nuxt.js is really easy to get started with. A simple ndency.'
      },
      {
        title: 'slide 3 x',
        text: 'Prueba de slide___.'
      }
    ]
  }),
  methods: {
    prevItem () {
      if (this.activeItem > 0) {
        this.activeItem--
      } else {
        this.activeItem = this.slideItems.length - 1
      }
    },
    nextItem () {
      if (this.activeItem < this.slideItems.length - 1) {
        this.activeItem++
      } else {
        this.activeItem = 0
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/main.styl'
.section--1
  width 100%
  height 100vh
  display flex
  align-items center
  justify-content center
  overflow hidden
  max-width 1100px
  margin auto
  position relative
  .con-text
    width 55%
    padding 20px
    z-index 200
    &:after
      position absolute
      right  0%
      width 150%
      height 100%
      content ''
      top 0px
      z-index 50
      background-image: linear-gradient(-90deg, colorx(bg) 15%, transparent 60%);
      // background-image: linear-gradient(-90deg, rgb(0,0,100) 0%, transparent 100%);
    button
      padding 10px 40px
      margin-top 20px
      border-radius 20px
      border 2px solid colorx(primary, .2)
      background transparent
      z-index 200
      position relative
    p
      position relative
      letter-spacing 1px
      z-index 100
    h2
      z-index 200
      position relative
      letter-spacing 2px
      text-transform uppercase
      font-size 2rem
      font-weight normal
      color colorx(primary)
  .con-img
    width 45%
    padding 20px
    position relative
    z-index 100
    img
      z-index 100
      width 100%
      min-width 800px

@media only screen and (max-width: 768px)
  .section--1
    .con-img
      width 100%
    .con-text
      width 100%
      position absolute
      height 100%
      top 0px
      display flex
      justify-content center
      flex-direction column
@media only screen and (max-width: 600px)
  .section--1
    .con-text
      h2
        font-size 1rem
      p
        font-size .7rem
</style>
