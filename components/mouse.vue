<template>
  <div class="mouse">
    <span class="circle" />
    <span class="border" />
    <span class="bg" />
    <span class="border-bg" />
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus">
@require '../styles/main.styl'
.mouse
  margin 10px 10px
  width 16px
  height 28px
  position relative
  // border 2px solid rgba(255,255,255,.2)
  background rgba(255,255,255,.2)
  border-radius 20px
  overflow hidden
  box-sizing border-box
  .circle
    width 4px
    height 4px
    background rgb(255,255,255)
    position absolute
    left 50%
    top 7px
    transform translate(-2px)
    border-radius 50%
    animation ruedax 2s ease infinite
    z-index 300
  .bg
    background colorx(bg)
    width 12px
    height 24px
    border-radius 20px
    position absolute
    z-index 200
    left 2px
    top 2px
  .border-bg
    // background colorx(bg)
    background rgb(255,255,255)
    width 22px
    height 38px
    border-radius 20px
    position absolute
    z-index 100
    bottom 0px
    left -2px
    animation borderx 2s ease infinite

@keyframes ruedax
  0%
    transform translate(-2px)
    opacity 0
  30%
    transform translate(-2px)
    opacity 1
  60%
    transform translate(-2px, 10px)
    opacity 0
  100%
    opacity 0
    transform translate(-2px)

@keyframes borderx
  0%
    transform translate(0)
    opacity 0
  30%
    transform translate(0)
    opacity 1
  60%
    transform translate(0, 100%)
    opacity 0
  100%
    opacity 0
    transform translate(0)

@media only screen and (max-width: 768px)
  .mouse
    border-radius 3px
    .circle
      animation ruedax 2s ease infinite reverse
    .bg
      border-radius 3px
    .border-bg
      border-radius 3px
      animation borderx 2s ease infinite reverse

@media only screen and (orientation: landscape) and (max-width: 850px)
  .mouse
    width 28px
    height 16px
    margin 3px 10px
    .border-bg
      width 38px
      height 22px
    .bg
      width 24px
      height 12px

</style>
