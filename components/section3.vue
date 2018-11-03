<template>
  <section
    id="section-3"
    class="sections section--3">
    <button
      v-if="active"
      class="btn-back"
      @click="active = false">
      <i class="material-icons">
        chevron_left
      </i>
    </button>
    <ul class="team-ul">
      <li
        v-for="(user, index) in team"
        :key="index"
        :class="[`user-${index}`, {'not-active': index != activeIndex && active}, {'is-active': index == activeIndex && active}]"
        @click="activeUser(index)">
        <img
          :src="getImage(index)"
          alt="team">
        <div class="cubo1" />
        <div class="cubo2" />
      </li>
    </ul>

    <div
      :class="{'activex': active}"
      class="con-texts-user">
      <h4>{{ team[activeIndex].name }}</h4>
      <p>{{ team[activeIndex].description }}</p>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    active: null,
    activeIndex: 0,
    team: [
      {
        name: 'Jessica Jones 0',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea laboriosam, id accusantium autem dolores pariatur minus eius voluptate! Aliquam beatae corrupti officia est temporibus voluptates, maiores tempore laboriosam maxime ducimus.',
        twitter: '',
        linkedin: '',
        facebook: ''
      },
      {
        name: 'Jessica Jones 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea laboriosam, id accusantium autem dolores pariatur minus eius voluptate! Aliquam beatae corrupti officia est temporibus voluptates, maiores tempore laboriosam maxime ducimus.',
        twitter: '',
        linkedin: '',
        facebook: ''
      },
      {
        name: 'Jessica Jones 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea laboriosam, id accusantium autem dolores pariatur minus eius voluptate! Aliquam beatae corrupti officia est temporibus voluptates, maiores tempore laboriosam maxime ducimus.',
        twitter: '',
        linkedin: '',
        facebook: ''
      },
      {
        name: 'Jessica Jones 3',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea laboriosam, id accusantium autem dolores pariatur minus eius voluptate! Aliquam beatae corrupti officia est temporibus voluptates, maiores tempore laboriosam maxime ducimus.',
        twitter: '',
        linkedin: '',
        facebook: ''
      },
      {
        name: 'Jessica Jones 4',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea laboriosam, id accusantium autem dolores pariatur minus eius voluptate! Aliquam beatae corrupti officia est temporibus voluptates, maiores tempore laboriosam maxime ducimus.',
        twitter: '',
        linkedin: '',
        facebook: ''
      },
      {
        name: 'Jessica Jones 5',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea laboriosam, id accusantium autem dolores pariatur minus eius voluptate! Aliquam beatae corrupti officia est temporibus voluptates, maiores tempore laboriosam maxime ducimus.',
        twitter: '',
        linkedin: '',
        facebook: ''
      },
      {
        name: 'Jessica Jones 6',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea laboriosam, id accusantium autem dolores pariatur minus eius voluptate! Aliquam beatae corrupti officia est temporibus voluptates, maiores tempore laboriosam maxime ducimus.',
        twitter: '',
        linkedin: '',
        facebook: ''
      },
    ]
  }),
  watch: {
    '$store.state.section': function () {
      this.active = false
    }
  },
  methods: {
    activeUser (index) {
      this.active = true
      this.activeIndex = index
    },
    getImage(index) {
      const imageUrl = require(`~/static/${index}.png`)
      return imageUrl
    }
  }
}
</script>
<style lang="stylus">
@require '../styles/main.styl'

.btn-back
  position absolute
  left 0px
  height 100%
  z-index 500
  background colorx(primary, .1)

.con-texts-user
  position absolute
  left 50%
  width 50%
  max-width 500px
  text-align left
  padding 30px
  opacity 0
  visibility hidden
  transform translate(-200px) scale(.6)
  transition all .1s ease
  z-index 100
  h4
    font-weight normal
    padding 10px
    font-size 1.2rem
    border-bottom 1px solid colorx(primary, .1)
  p
    font-size .85rem
    padding 10px
    border-bottom 1px solid colorx(primary, .1)
  &.activex
    opacity 1
    visibility visible
    transform translate(0px) scale(1)
    transition all .25s ease .3s
.section--3
  width 100%
  height 100vh
  transform 1s cubic-bezier(0.2,1,0.8,1)
  padding-top 48px
  padding-bottom 49px
  position relative
  display flex
  align-items center
  justify-content center
  overflow hidden
  .team-ul
    position relative
    width 1020px
    height 100%
    z-index 200
    li
      width 180px
      height 180px
      cursor pointer
      transition all .2s ease
      &:after
        width 1px
        height 50vh
        position absolute
        content ''
        top 0px
        left calc(50% - 1px)
        background colorx(primary, .1)
        transform translate(0, 213px)
        transition all .25s ease
      &:before
        width 1px
        height 50vh
        position absolute
        content ''
        bottom 0px
        left calc(50% - 1px)
        transform translate(0, -213px)
        background colorx(primary, .1)
        transition all .25s ease
      &.is-active
        left 25%
        position fixed
        transform translate(0%,-50%) !important
        &:after
          height 50vh !important
          background colorx(primary, .1) !important
        &:before
          height 50vh !important
          background colorx(primary, .1) !important
        img
          transform scale(1.3) !important
        .cubo1:after,.cubo1:before
          opacity 1
        .cubo2
          opacity 1
          transform scale(1.4) rotate(45deg) !important
      &.not-active
        opacity .1
        filter blur(5px)
        pointer-events none
      &:hover
        &:after
          background colorx(primary, 1)
          height 0px
          width 3px
        &:before
          height 0px
          background colorx(primary, 1)
        img
          transform scale(1.1)
        .cubo1:after,.cubo1:before
          opacity 1
        .cubo2
          opacity 1
          transform scale(1) rotate(45deg)
      .cubo1
        content ''
        position absolute
        width 98%
        height 98%
        border 1px solid colorx(primary, .1)
        top 1%
        left 1%
        transform rotate(45deg)
        transition all .25s ease
        &:after
          content ''
          width 5px
          height 5px
          background colorx(primary)
          top 0px
          left 0px
          position absolute
          opacity 0
        &:before
          opacity 0
          content ''
          width 5px
          height 5px
          background colorx(primary)
          bottom 0px
          right 0px
          position absolute
      .cubo2
        content ''
        position absolute
        width 90%
        height 90%
        border 1px solid colorx(primary, .3)
        top 5%
        left 5%
        transform rotate(45deg) scale(1.5)
        opacity 0
        transition all .25s ease
        &:after
          content ''
          width 5px
          height 5px
          background colorx(primary)
          bottom 0px
          left 0px
          position absolute
        &:before
          content ''
          width 5px
          height 5px
          background colorx(primary)
          top 0px
          right 0px
          position absolute
      img
        height 100%
        transition all .3s cubic-bezier(0.2,1,0.8,1)
    .user-0
      position absolute
      left 0px
      top 50%
      transform translate(0,calc(-50% + 65px))
    .user-1
      position absolute
      left 140px
      top 50%
      transform translate(0%,calc(50% - 256px))
    .user-2
      position absolute
      left 280px
      top 50%
      transform translate(0,calc(-50% + 65px))
    .user-3
      position absolute
      left 420px
      top 50%
      transform translate(0%,calc(50% - 256px))
    .user-4
      position absolute
      left 560px
      top 50%
      transform translate(0,calc(-50% + 65px))
    .user-5
      position absolute
      left 700px
      top 50%
      transform translate(0%,calc(50% - 256px))
    .user-6
      position absolute
      left 840px
      top 50%
      transform translate(0,calc(-50% + 65px))




@media only screen and (max-width: 1200px)
  .section--3
    .team-ul
      width 100%
      overflow hidden
      overflow-x auto
      li
        &.is-active
          left 10%

@media only screen and (max-width: 650px) and (orientation: portrait)
  .con-texts-user
    transform scale(1)
    &.activex
      width 100%
      left 50%
      top 40%
      transform translate(-50%)
      text-align center
      transition all .1s ease
      p
        font-size .7rem
  .section--3
    .team-ul
      li
        &.is-active
          width 120px
          height 120px
          left calc(50% - 60px)
          top 25%
          transform translate(0)
          &:after
            display none
@media only screen and (orientation: landscape) and (max-width: 850px)
  .section--3
    .team-ul
      li
        transform scale(.6) translate(0, -50%) !important
</style>
