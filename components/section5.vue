<template>
  <section
    id="section-5"
    class="sections section--5">
    <div class="con-uls">
      <ul class="ulx-1 ulx">
        <li
          v-for="(map, index) in maps"
          :key="index" >
          <div class="date-cube">
            <div class="date-cube-1" />
            <div class="date-cube-2" />
          </div>
          <span class="spanx">
            {{ map.date }}
          </span>
          <p class="textx">
            {{ map.text }}
          </p>
        </li>
      </ul>
      <ul class="ulx-2 ulx">
        <li
          v-for="(map, index) in maps2"
          :key="index" >
          <div class="date-cube">
            <div class="date-cube-1" />
            <div class="date-cube-2" />
          </div>
          <span class="spanx">
            {{ map.date }}
          </span>
          <p class="textx">
            {{ map.text }}
          </p>
        </li>
      </ul>
    </div>

  </section>
</template>
<script>
export default {
  data: () => ({
    maps: [
      {
        date: '2017.09',
        text: 'Establishment of Singapore Corporation.'
      },
      {
        date: '2018.02',
        text: 'Exchange Platform 1st Test (mining Reward not applied)'
      },
      {
        date: '2018.05',
        text: 'MIC Mining Reward System Development Initiated'
      },
      {
        date: '2018.07',
        text: 'Exchange Platform 2st Test (Mining Reward applied)'
      },
      {
        date: '2018.09',
        text: 'Establishment of Brazil Corporation.'
      }
    ],
    maps2: [
      {
        date: '2018.10',
        text: 'Launch MICRO global marketing advertise.'
      },
      {
        date: '2018.11',
        text: 'Exchange pre-membership And Pre-Token Sale'
      },
      {
        date: '2018.12',
        text: 'MICRO Exchange launching and MIC Token Listing'
      },
      {
        date: '2019.01',
        text: 'KRW Legal currency launching'
      },
      {
        date: '2019.03',
        text: 'futures trading launching'
      }
    ]
  })
}
</script>
<style lang="stylus">
@require '../styles/main.styl'
.section--5
  width 100%
  height 100vh
  display flex
  align-items center
  justify-content center

  .con-uls
    transform translate(-70px)
  .ulx
    margin-top 40px
    li
      position relative
      text-align center
      margin 20px

      .textx
        opacity 0
        position absolute
        font-size .65rem
        width 100%
        transition all .25s ease
        transform translate(0, -10px)
      &:hover
        &:before
          transform scale(1.3)
        .spanx
          transform translate(0, -5px) !important
          color colorx(primary, 1)
        .date-cube-1
          border 1px solid colorx(primary, .5) !important
          &:after
            transform translate(20px)
          &:before
            transform translate(-20px)
        .date-cube-2
          border 1px solid colorx(primary, 1) !important
          &:after
            transform translate(0, -20px)
          &:before
            transform translate(0, 20px)
        .textx
          opacity 1
          transform translate(0)
      &:before
        content ''
        width 10px
        height 10px
        background colorx(primary, 1)
        top 26%
        left calc(50% - 6px)
        position absolute
        opacity 1
        transform rotate(45deg)
        transition all .25s ease
      .spanx
        font-size .8rem
        position relative
        display block
        transition all .25s ease
      .date-cube
        width 140px
        height 140px
        position relative
        .date-cube-1
          width 80%
          height 80%
          position absolute
          left 10%
          top -10%
          transform-origin center
          transform rotate(45deg)
          border 1px solid colorx(primary, .1)
          transition all .25s ease
          &:after
            content ''
            width 4px
            height 4px
            background colorx(primary)
            top 0px
            left 0px
            position absolute
            opacity 1
            transition all .25s ease
          &:before
            transition all .25s ease
            opacity 1
            content ''
            width 4px
            height 4px
            background colorx(primary)
            bottom 0px
            right 0px
            position absolute
        .date-cube-2
          width 70%
          height 70%
          position absolute
          left 15%
          top -5%
          transform-origin center
          transform rotate(45deg)
          border 1px solid colorx(primary, .3)
          transition all .25s ease
          &:after
            content ''
            width 4px
            height 4px
            background colorx(primary)
            bottom 0px
            left 0px
            position absolute
            transition all .25s ease
          &:before
            content ''
            width 4px
            height 4px
            background colorx(primary)
            top 0px
            right 0px
            position absolute
            transition all .25s ease
  .ulx-1
    padding 10px
    display flex
    align-items center
    justify-content center
    position relative
    li
      &:not(:first-child):after
        content ''
        width 25px
        height 1px
        background colorx(primary, .1)
        top 41px
        left -32px
        position absolute
        opacity 1
    &:after
      content ''
      width 182px
      height 1px
      background colorx(primary, .1)
      bottom 82px
      right -135px
      position absolute
      opacity 1
      transform rotate(45deg)
    &:before
      content ''
      width 5px
      height 5px
      background colorx(primary, 1)
      bottom 17px
      right -106px
      position absolute
      opacity 1
      transform rotate(45deg)
  .ulx-2
    display flex
    align-items center
    justify-content center
    padding 10px
    position relative
    flex-direction row-reverse
    li
      &:not(:last-child):after
        content ''
        width 25px
        height 1px
        background colorx(primary, .1)
        top 41px
        left -32px
        position absolute
        opacity 1
    &:after
      content ''
      width 1px
      height 183px
      background colorx(primary, .1)
      bottom 124px
      right -44px
      position absolute
      opacity 1
      transform rotate(45deg)


@media only screen and (max-width: 1120px)
  .section--5
    .con-uls
      display flex
      align-items center
      justify-content flex-start
      overflow auto
      width 100% !important
      transform translate(0)
      margin-left 0px
      padding 20px

      .ulx
        display flex
        align-items flex-start
        justify-content flex-start

        li
          .date-cube
            width 250px
            height 250px
      .ulx-2
        flex-direction row
        li
          &:after
            display none !important
      .ulx-1
        li
          &:after
            display none !important
      .ulx-1:after, .ulx-2:after, .ulx-1:before
        display none

@media only screen and (orientation: landscape) and (max-width: 850px)
  .section--5
    .con-uls
      padding-top 5px
      padding-bottom 10px
      .ulx
        margin-top 20px
      li
        .date-cube
          width 180px !important
          height 180px !important
</style>
