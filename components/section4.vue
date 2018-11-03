<template>
  <section
    id="section-4"
    class="sections section--4">
    <ul class="partners-ul">
      <li
        v-for="(partner, index) in partners"
        :key="index" >
        <img
          :src="partner.img"
          alt="partner-1">
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => ({
    partners: [
      {
        img: require(`~/static/partner-1.png`)
      },
      {
        img: require(`~/static/partner-2.png`)
      },
      {
        img: require(`~/static/partner-3.png`)
      },
      {
        img: require(`~/static/partner-4.png`)
      },
      {
        img: require(`~/static/partner-5.png`)
      },
      {
        img: require(`~/static/partner-6.png`)
      }
    ]
  })
}
</script>
<style lang="stylus">
@require '../styles/main.styl'
.section--4
  width 100%
  height 100vh
  display flex
  align-items center
  justify-content center

.partners-ul
  width 100%
  display flex
  align-items center
  justify-content center
  flex-wrap wrap
  max-width 1000px
  position relative
  li
    display flex
    align-items center
    justify-content center
    width calc(33% - 20px)
    position relative
    border 1px solid colorx(primary, .1)
    margin 10px
    img
      width 100%
      max-width 220px

@media only screen and (max-width: 800px)
  .partners-ul
    padding 10px
    li
      width calc(50% - 14px)
      margin 7px
@media only screen and (orientation: landscape) and (max-width: 850px)
  .partners-ul
    padding 10px
    display flex
    align-items flex-start
    justify-content flex-start
    width 100%
    overflow auto
    li
      width calc(33% - 14px)
      margin 7px
</style>
