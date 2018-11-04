<template>
  <nav class="nav-bar">
    <div class="con-logo">
      <img
        src="~/static/logo.png"
        alt="Micro">
    </div>

    <div class="nav-bar--btns">
      <button class="btns--login">Login</button>
      <button class="btns--register">Register</button>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    hola: ''
  })
}
</script>
<style lang="stylus">
@require '../styles/main.styl'
.con-logo
  width 100px
  margin-left 10px
  img
    width 100%
.nav-bar
  position fixed
  left 0px
  top 0px
  width 100%
  display flex
  align-items center
  justify-content space-between
  border-bottom 1px solid colorx(primary, .1)
  z-index 2000
  background colorx(bg)

.nav-bar--btns
  padding 10px
  button
    padding 8px 20px
    border-radius 20px
    text-transform uppercase
    background transparent
    font-size .6rem
    &.btns--register
      background colorx(primary, 1)

// responsive

@media only screen and (orientation: landscape) and (max-width: 850px)
  .con-logo
    width 60px
  .nav-bar
    .nav-bar--btns
      padding 5px
</style>
