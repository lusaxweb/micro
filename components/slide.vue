<template>
  <div
    id="section-0"
    class="section--0 sections">
    <div class="con-text-0">
      <h1>
        {{ $t('section0.title') }}
      </h1>
      <p>
        {{ $t('section0.text') }}
      </p>

    </div>

    <div class="con-img">
      <img
        src="~/static/x.png"
        alt="micro-x">
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

<style lang="stylus">
@require '../styles/main.styl'
.section--0
  width 100%
  height 100vh
  display flex
  align-items center
  justify-content center
  overflow hidden
  max-width 1200px
  margin auto
  .con-text-0
    width 55%
    padding 20px
    p
      letter-spacing 1px
    h1
      letter-spacing 2px
      text-transform uppercase
      font-size 5rem
      font-weight normal
      color colorx(primary)
  .con-img
    width 45%
    padding 20px
    img
      width 100%

@media only screen and (max-width: 768px)
  .section--0
    display block
    padding-top 40px
    // flex-direction column

    .con-text-0
      width 100%
      h1
        font-size 3rem
    .con-img
      width 100%
      max-width 300px
      margin auto

@media only screen and (max-width: 450px)
  .section--0
    .con-text-0
      h1
        font-size 2rem
</style>
