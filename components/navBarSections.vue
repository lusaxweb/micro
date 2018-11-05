<template>
  <nav class="nav-bar-sections">
    <h3 class="title-section">
      {{ sections[section].title }}
    </h3>
    <div class="con-lang">
      <div class="lang-value">
        {{ $store.state.locale }}
      </div>
      <ul>
        <li
          v-for="lang in $store.state.locales"
          v-if="lang != $store.state.locale"
          :key="lang">
          <nuxt-link :to="`/${lang}`">
            {{ lang }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="con-btns-ul">
      <button
        :disabled="section == 0"
        class="btns-arrow btn-prev"
        @click="changePrevSection">
        <i class="material-icons">
          keyboard_arrow_up
        </i>
      </button>
      <ul class="ul-sections">
        <li
          v-for="(li, index) in sections"
          :key="index"
          :class="{'active--item': index == section}"
          @click="changeSection(index)">
          <button>
            {{ index }}
            <span class="btn--border" />
          </button>
        </li>
      </ul>
      <button
        :disabled="section == 5"
        class="btns-arrow btn-next"
        @click="changeNextSection">
        <i class="material-icons">
          keyboard_arrow_down
        </i>
      </button>
    </div>
    <h3 class="section--number">
      {{ sections[section].numero }}
    </h3>
  </nav>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data: () => ({
    sectionActive: 0,
    sections: [
      {
        title: 'MICRO OPEN',
        numero: '01',
        active: false
      },
      {
        title: 'INTERFACE',
        numero: '02',
        active: false
      },
      {
        title: 'FEATURES MICRO',
        numero: '03',
        active: false
      },
      {
        title: 'TEAM',
        numero: '04',
        active: false
      },
      {
        title: 'Partners',
        numero: '05',
        active: false
      },
      {
        title: 'ROAD MAP',
        numero: '06',
        active: false
      },
    ]
  }),
  computed: {
    ...mapState([
      'section'
    ])
  },
  methods: {
    ...mapActions([
      'changeSection',
      'changeLang'
    ]),
    changePrevSection () {
      let sectionNew = this.$store.state.section
      sectionNew--
      if(sectionNew < 0) return
      this.changeSection(sectionNew)
    },
    changeNextSection () {
      let sectionNew = this.$store.state.section
      sectionNew++
      if(sectionNew > 5) return
      this.changeSection(sectionNew)
    }
  }
}
</script>
<style lang="stylus">
@require '../styles/main.styl'

.title-section
  position absolute
  top 55px
  right 65px
  font-weight normal
  letter-spacing 1px
  font-size 1.2rem
  text-transform uppercase
  text-align right

.con-lang
  position absolute
  top 48px
  font-size .7rem
  width 100%
  text-align center
  &:hover
    ul
      visibility visible
      opacity 1
  .lang-value
    padding 5px
    text-transform uppercase
    cursor pointer
    background colorx(primary, .2)
  ul
    opacity 0
    visibility hidden
    position relative
    left 0px
    top 0px
    border-bottom 1px solid colorx(primary, .2)
    transition all .25s ease
    li
      cursor pointer
      text-transform uppercase
      a
        outline none
        text-decoration none
        padding 4px
        display block
        &:hover
          color colorx(primary, 1)
.btns-arrow
  transform translate(-25px)
  width 100%
  background transparent
  transition all .25s ease
  i
    color colorx(primary, .2)
  &:hover
    transform translate(-25px, -4px)
    i
      color colorx(primary, 1)
  &:disabled
    pointer-events none
    opacity .5
  &.btn-next
    &:hover
      transform translate(-25px, 4px)

.con-btns-ul
  width 100%

.nav-bar-sections
  position fixed
  right -1px
  top 0px
  border-left 1px solid colorx(primary, .1)
  z-index 1000
  height 100%
  display flex
  align-items center
  justify-content flex-start
  width 51px
  background colorx(bg)
  box-sizing border-box
  .section--number
    position absolute
    bottom 65px
    font-size 2rem
    transform rotate(90deg) translate(0, 120%)
    font-weight normal
    &:after
      content ''
      position absolute
      right 45%
      top -12px
      background rgb(255,255,255)
      width 3px
      height 15px

  ul.ul-sections
    transform translate(-8px)
    display block
    position relative
    li
      margin 30px 0px
      color transparent
      cursor pointer
      position relative
      button
        width 15px
        box-sizing border-box
        height 15px
        background colorx(bg)
        transform rotate(45deg)
        &:after
          content: ''
          left 50%
          top 50%
          transform translate(-50%, -50%)
          background colorx(primary)
          width 7px
          height 7px
          position absolute
          opacity 0
          transition all .25s ease
        &:before
          content: ''
          left 50%
          top 50%
          transform translate(-50%, -50%)
          border 1px solid colorx(primary, .1)
          width 20px
          height 20px
          position absolute
          opacity 1
          background colorx(bg)
          transition all .25s ease

      &.active--item
        button
          &:after
            opacity 1
          &:before
            opacity 1
            width 30px !important
            height 30px !important

@media only screen and (max-width: 768px)
  .title-section
    right 30px
    // font-size 1rem
    // transform translate(-25px) rotate(90deg)
  .con-lang
    .lang-value
      font-size .6rem !important
    li
      a
        font-size .6rem !important
  .nav-bar-sections
    width 22px
    .section--number
      font-size 1.4rem
      &:after
        top -9px
        height 10px
        width 2px
  .btns-arrow
    transform translate(-12px) !important

@media only screen and (orientation: landscape) and (max-width: 850px)
  .btns-arrow
    background colorx(bg)
    margin-bottom 5px
    transform translate(0px) !important
    width 30px
    border-bottom 1px solid colorx(primary, .1)
    &.btn-prev
      border-top 1px solid colorx(primary, .1)
  .nav-bar-sections
    width 30px
    ul.ul-sections
      display none
</style>
