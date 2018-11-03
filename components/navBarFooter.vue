<template>
  <div class="nav-bar-footer">
    <div class="left">
      <div class="mousex">
        <mouse />
      </div>

      <p class="text-download">
        DOWNLOAD <span>WHITE PAPER</span>
      </p>

      <ul class="nav-bar-footer--papers">
        <li>
          <img
            title="English"
            src="~/static/united-states.svg"
            alt="united-states">
          <span>English</span>
        </li>
        <li>
          <img
            title="Korean"
            src="~/static/south-korea.svg"
            alt="south-korea">
          <span>Korean</span>
        </li>
        <li>
          <img
            title="Portugues"
            src="~/static/brazil.svg"
            alt="south-korea">
          <span>Portugues</span>
        </li>
        <li>
          <img
            title="Español"
            src="~/static/spain.svg"
            alt="south-korea">
          <span>Español</span>
        </li>
        <li>
          <img
            title="Chinese"
            src="~/static/china.svg"
            alt="south-korea">
          <span>Chinese</span>
        </li>
        <li>
          <img
            title="Japonese"
            src="~/static/japan.svg"
            alt="south-korea">
          <span>Japonese</span>
        </li>
      </ul>
    </div>

    <div class="right">
      <ul class="nav-bar-footer--redes">
        <li>
          <span class="flaticon-facebook" />
        </li>
        <li>
          <span class="flaticon-twitter" />
        </li>
        <li>
          <span class="flaticon-linkedin" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mouse from './mouse'
export default {
  components: {
    mouse
  }
}
</script>
<style lang="stylus">
@require '../styles/main.styl'
.text-download
  font-size .6rem
  padding-right 8px
.nav-bar-footer
  background colorx(bg)
  border-top 1px solid colorx(primary, .1)
  position fixed
  bottom 0px
  width 100%
  left 0px
  z-index 1500
  display flex
  align-items center
  justify-content space-between
  .left
    display flex
    align-items center
    justify-content flex-start
  .nav-bar-footer--papers
    display flex
    align-items center
    justify-content flex-start
    li
      padding 10px
      display flex
      align-items center
      justify-content center
      font-size .6rem
      img
        width 15px
        margin-right 4px
  .nav-bar-footer--redes
    display flex
    align-items center
    justify-content flex-start
    padding-right 10px
    li
      padding 10px
      font-size .7rem

@media only screen and (max-width: 768px)
  .text-download
    font-size .55rem
  .nav-bar-footer
    .nav-bar-footer--papers
      li
        padding 5px
        img
          margin-right 0px
        span
          display none
@media only screen and (max-width: 400px)
  .nav-bar-footer
    .nav-bar-footer--redes
      li
        padding 6px
    .text-download
      span
        display none
@media only screen and (max-width: 322px)
  .text-download
    display none

@media only screen and (orientation: landscape) and (max-width: 850px)
  .nav-bar-footer
    .nav-bar-footer--redes
      li
        padding 6px
</style>
