<template>
  <section
    id="section-2"
    class="sections section--2">
    <ul class="ul-sec-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{'is-active': itemActive == index}"
        @click="changeItem(index)">
        <h4>{{ item.title }}</h4>
      </li>
    </ul>

    <div
      class="con-contents">
      <div
        ref="contents"
        class="content">
        <div
          v-for="(item, index) in items"
          :key="index"
          :id="[`item-${index}`]"
          class="item-content">
          <h3> {{ item.title }} </h3>
          <img
            src="~/static/startup.jpg"
            alt="startup">
          <p> {{ item.text }} </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    itemActive: 0,
    notEffect: false,
    items: [
      {
        title: 'Profit distribution',
        text: 'MIC Holder can receive a dividend on a daily basis, translating 50% of the transaction fee revenue into a share held against the volume of distribution.'
      },
      {
        title: 'Buy Back & Incineration',
        text: 'MIC Token buy-back permanently incinerates 50% of the transaction fee revenue every month to resolve sustainability and increase value'
      },
      {
        title: 'Trading Mining',
        text: 'The most advanced training MICToken Reward program enables all participants to generate innovative revenue and increase value.'
      },
      {
        title: 'Global Standard Platform',
        text: 'With Ultra-lean Design, we have developed 34 upper-coin wallets per second and processed 1 million transactions per second.'
      },
      {
        title: '24 Hours Multilingual Customer Support',
        text: 'Leverage the selected zenddesk on the global exchange to support multi-lingual, 24x7 multilingual e-mail and real-time chat support..'
      },
      {
        title: 'Introducing the Stake-Unstake system',
        text: 'Users can set the holding type of MICRO token to receive dividends from the exchange or to seek revenue from the transaction.'
      }
    ]
  }),
  mounted() {
    this.$refs.contents.addEventListener('scroll', event => {
      if (this.notEffect) return
      let scrollTopx = event.target.scrollTop

      let items = this.$refs.contents.children
      let itemsArray = [ ...items ]
      let itemActive = null

      itemsArray.forEach(item => {
        if (scrollTopx > (item.offsetTop - 50)) {
          itemActive = item
        }
      })

      let _index = itemActive.id.split('-')[1]

      this.itemActive = _index
    })
  },
  methods: {
    changeItem (index) {
      this.notEffect = true
      this.itemActive = index
      this.scrollSection(`#item-${index}`)
      setTimeout(() => {
        this.notEffect = false
      },305)
    },
    scrollSection(id) {
      let section = document.querySelector(id)
      if (!section) return
      this.scrollIt(
      section,
      300,
      'easeInOutQuint')
    },
    scrollIt(destination, duration = 200, easing = 'linear', callback) {
      const easings = {
        linear(t) {
          return t;
        },
        easeInQuad(t) {
          return t * t;
        },
        easeOutQuad(t) {
          return t * (2 - t);
        },
        easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic(t) {
          return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart(t) {
          return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint(t) {
          return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
          return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
      };

      const start = document.querySelector('.content').scrollTop;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      console.log(document.querySelector('.content'))
      const documentHeight = Math.max(document.querySelector('.content').scrollHeight, document.querySelector('.content').offsetHeight, document.querySelector('.content').clientHeight, document.querySelector('.content').scrollHeight, document.querySelector('.content').offsetHeight);
      const windowHeight = document.querySelector('.content').innerHeight || document.querySelector('.content').clientHeight || document.getElementsByTagName('body')[0].clientHeight;
      const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
      const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

      if ('requestAnimationFrame' in window === false) {
        document.querySelector('.content').scroll(0, destinationOffsetToScroll);
        if (callback) {
          callback();
        }
        return;
      }

      function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easings[easing](time);
        document.querySelector('.content').scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

        if (document.querySelector('.content').scrollTop === destinationOffsetToScroll) {
          if (callback) {
            callback();
          }
          return;
        }

        requestAnimationFrame(scroll);
      }

      scroll()
    }
  }
}
</script>
<style lang="stylus">
@require '../styles/main.styl'

.section--2
  width 100%
  height 100vh
  padding-top 48px
  padding-bottom 49px
  display flex
  align-items center
  justify-content center
  .con-contents
    width 70%
    height 100%
    position relative
    .content
      width 100%
      max-width 500px
      margin auto
      border-left 1px solid colorx(primary, .1)
      border-right 1px solid colorx(primary, .1)
      height 100%
      overflow auto
      position relative
      .item-content
        width 100%
        padding 30px 0px
        position relative
        p
          padding 10px
          font-size .9rem
        h3
          padding 10px
          padding-left 15px
          color colorx(primary, 1)
          font-weight normal
          position relative
          &:after
            content ''
            left 0px
            top 50%
            width 10px
            height 1px
            background colorx(primary, 1)
            position absolute
      img
        width 100%
  .ul-sec-2
    position relative
    width 30%
    height 100%
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 33% 33%;
    min-width 450px
    li
      border 1px solid colorx(primary, .1)
      display flex
      align-items flex-end
      position relative
      text-align right
      padding 15px
      cursor pointer
      &:after
        opacity 0
        content ''
        left -1px
        top -1px
        width 0px
        height 0px
        background colorx(primary)
        position absolute
        transition all .25s ease
      &:before
        opacity 0
        content ''
        right -1px
        bottom -1px
        width 0px
        height 0px
        background colorx(primary)
        position absolute
        transition all .25s ease
      &.is-active
        background colorx(primary, .1)
        &:after
          opacity 1
          width 7px
          height 7px
        &:before
          width 7px
          height 7px
          opacity 1
        h4
          color colorx(primary)
      h4
        font-weight normal
        text-align right
        width 100%


@media only screen and (max-width: 1200px)
  .section--2
    .ul-sec-2
      width 300px
      min-width 300px
@media only screen and (max-width: 800px)
  .section--2
    .ul-sec-2
      display none
    .con-contents
      width 100%
      .content
        max-width 100%
</style>
